import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Build from "./components/Build";
import Search from "./components/Search";
function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Search></Search>
        <Build></Build>
        <Stats></Stats>
      </div>
    </>
  );
}

export default App;
