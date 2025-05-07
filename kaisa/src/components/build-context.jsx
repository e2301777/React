import { createContext, useReducer, useEffect, useState } from "react";

export const BuildContext = createContext();

function buildReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.itemsInBuild.length < 6) {
        const newStats = { ...state.stats };
        if (action.payload.stats.FlatPhysicalDamageMod) {
          newStats.ad += action.payload.stats.FlatPhysicalDamageMod;
        }
        if (action.payload.stats.FlatMagicDamageMod) {
          newStats.ap += action.payload.stats.FlatMagicDamageMod;
        }
        if (action.payload.stats.PercentAttackSpeedMod) {
          newStats.as += action.payload.stats.PercentAttackSpeedMod;
        }
        return {
          ...state,
          itemsInBuild: [...state.itemsInBuild, action.payload],
          stats: newStats,
        };
      }
      return { ...state, buildFull: true };

    case "REMOVE_ITEM":
      {
        const removedItem = state.itemsInBuild[action.payload];
        const updatedStats = { ...state.stats };
        if (removedItem.stats.FlatPhysicalDamageMod) {
          updatedStats.ad -= removedItem.stats.FlatPhysicalDamageMod;
        }
        if (removedItem.stats.FlatMagicDamageMod) {
          updatedStats.ap -= removedItem.stats.FlatMagicDamageMod;
        }
        if (removedItem.stats.PercentAttackSpeedMod) {
          updatedStats.as -= removedItem.stats.PercentAttackSpeedMod;
        }
        return {
          ...state,
          itemsInBuild: state.itemsInBuild.filter((item, index) => index !== action.payload),
          stats: updatedStats,
        };
      }

    case "UPDATE_LEVEL":
      return {
        ...state,
        level: action.payload.level,
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload.theme,
      };

    default:
      return state;
  }
}

export default function BuildContextProvider({ children }) {
  const [buildState, buildDispatch] = useReducer(buildReducer, {
    itemsInBuild: [],
    buildFull: false,
    stats: { ad: 0, ap: 0, as: 0 },
    level: 1, // Default champion level
    theme: "default", // Default theme name or identifier
  });

  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/item.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = Object.entries(data.data)
          .filter(([id, item]) => !(item.maps && item.maps[30]))
          .reduce((acc, [id, item]) => {
            acc[id] = item;
            return acc;
          }, {});
        setItemData(filteredData);
      })
      .catch((error) => console.error("Error fetching item data:", error));
  }, []);

  const addItemToBuild = (item) => {
    buildDispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromBuild = (index) => {
    buildDispatch({ type: "REMOVE_ITEM", payload: index });
  };

  const updateLevel = (level) => {
    buildDispatch({ type: "UPDATE_LEVEL", payload: { level } });
  };

  const setTheme = (theme) => {
    buildDispatch({ type: "SET_THEME", payload: { theme } });
  };

  return (
    <BuildContext.Provider
      value={{
        itemsInBuild: buildState.itemsInBuild,
        buildFull: buildState.buildFull,
        stats: buildState.stats,
        level: buildState.level,
        theme: buildState.theme,
        itemData,
        addItemToBuild,
        removeItemFromBuild,
        updateLevel,
        setTheme,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
}