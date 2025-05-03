import ItemList from "./ItemList";

export default function Search() {
  return (
    <div className="search-container">
      <h2>Search items</h2>
      <input type="text" />
      <button>Add item to build</button>
      <ItemList />
    </div>
  );
}
