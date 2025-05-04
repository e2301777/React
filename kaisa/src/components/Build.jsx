import { useState } from "react";

export default function Build() {
  const [level, setLevel] = useState(1);

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
    </div>
  );
}
