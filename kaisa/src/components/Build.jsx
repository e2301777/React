import { useState, useContext } from "react";
import { BuildContext } from "./build-context";

export default function Build() {
  const [level, setLevel] = useState(1);
  const { itemsInBuild, removeItemFromBuild } = useContext(BuildContext);

  function handleSliderChange(event) {
    setLevel(event.currentTarget.value);
  }

  return (
    <div className="build-container">
      <h2>Current build</h2>
      <h3>Champion lvl: {level}</h3>
      <input
        type="range"
        name="level"
        onChange={handleSliderChange}
        min={1}
        max={18}
        defaultValue={level}
      />
      <div className="build-items">
        {itemsInBuild.map((item, index) => (
          <div key={index}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/item/${item.image.full}`}
              alt={item.name}
            />
            <img
              className="delete-icon"
              src="../src/assets/delete.PNG"
              alt="delete"
              onClick={() => removeItemFromBuild(index)}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}