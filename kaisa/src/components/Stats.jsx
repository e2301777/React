import { useContext } from "react";
import { BuildContext } from "./build-context";

export default function Stats() {
  const { stats } = useContext(BuildContext);

  // Helper function to determine the color
  const getStatStyle = (value) => ({
    color: value >= 100 ? "green" : "white", // Green if >= 100, otherwise white
  });

  return (
    <div className="stats-container">
      <h2>Current bonus stats</h2>
      <h3 style={getStatStyle(stats.ad)}>Bonus AD: {stats.ad} / 100</h3>
      <h3 style={getStatStyle(stats.ap)}>Bonus AP: {stats.ap} / 100</h3>
      <h3 style={getStatStyle(stats.as * 100)}>
        Bonus AS: {(stats.as * 100).toFixed(0)} / 100
      </h3>
    </div>
  );
}