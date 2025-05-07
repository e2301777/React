import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Build from "./components/Build";
import Search from "./components/Search";
import BuildContextProvider, { BuildContext } from "./components/build-context";

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, setTheme } = useContext(BuildContext);

  // Update the background image of the root element when theme changes.
  useEffect(() => {
    const rootEl = document.getElementById("root");
    if (rootEl) {
      rootEl.style.backgroundImage = `url(${new URL(`./assets/${theme}`, import.meta.url).href})`;
    }
  }, [theme]);

  // Array of 13 theme image filenames from your assets folder
  const themeImages = [
    "default.PNG",
    "BulletAngelSkin.PNG",
    "KDASkin.PNG",
    "PrestigeKDASkin.PNG",
    "KDAALLOUTSkin.PNG",
    "PrestigeKDAALLOUTSkin.PNG",
    "iGSkin.PNG",
    "ArcadeSkin.PNG",
    "StarGuardianSkin.PNG",
    "HeavenscaleSkin.PNG",
    "InkshadowSkin.PNG",
    "LagoonDragonSkin.PNG",
    // Add any additional image filename if needed to total 13
  ];

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const selectTheme = (imageName) => {
    setTheme(imageName);
    console.log("Theme selected:", imageName);
    toggleModal();
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Search />
        <Build />
        <Stats />
      </div>

      {/* Settings Button centered below the app-container */}
      <button className="settings-button" onClick={toggleModal}>
        Theme selector
      </button>

      {/* Modal overlay plus settings modal */}
      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="settings-modal">
            <h2>Theme selector</h2>
            <div className="theme-selector">
              {themeImages.map((img, index) => (
                <button key={index} className="theme-btn" onClick={() => selectTheme(img)}>
                  <img src={new URL(`./assets/${img}`, import.meta.url).href} alt={img} />
                </button>
              ))}
            </div>
            <button onClick={toggleModal}>Close</button>
          </div>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BuildContextProvider>
      <AppContent />
    </BuildContextProvider>
  );
}

export default App;