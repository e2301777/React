import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Build from "./components/Build";
import Search from "./components/Search";
import { useEffect, useState } from "react";

function App() {
  const [itemData, setItemData] = useState(null);
  const [itemsInBuild, setItemsInBuild] = useState([]); // State to track items in the build

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/item.json")
      .then((response) => response.json())
      .then((itemData) => {
        const filteredData = Object.entries(itemData.data)
          .filter(([id, item]) => !(item.maps && item.maps[30]))
          .reduce((acc, [id, item]) => {
            acc[id] = item;
            return acc;
          }, {});

        setItemData(filteredData);
      })
      .catch((error) => console.error("Error fetching item data:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="app-container">
        <Search
          itemData={itemData}
          itemsInBuild={itemsInBuild}
          setItemsInBuild={setItemsInBuild}
        />
        <Build itemsInBuild={itemsInBuild} />
        <Stats />
      </div>
    </>
  );
}

export default App;
