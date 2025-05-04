import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Build from "./components/Build";
import Search from "./components/Search";
import BuildContextProvider from "./components/build-context";

function App() {
  return (
    <BuildContextProvider>
      <Header />
      <div className="app-container">
        <Search />
        <Build />
        <Stats />
      </div>
    </BuildContextProvider>
  );
}

export default App;
