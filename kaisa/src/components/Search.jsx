import { useState } from "react";

export default function Search({ itemData, itemsInBuild, setItemsInBuild }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [buildFull, setbuildFull] = useState(false);

  function checkItem(event) {
    const value = event.target.value;
    setSearchTerm(value);

    if (itemData) {
      const matchingItems = Object.entries(itemData).filter(([id, item]) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(matchingItems); // Store entries as [id, item]
    }
  }

  function handleAddItemToBuild(item) {
    if(itemsInBuild.length < 6){
        setItemsInBuild([...itemsInBuild, item]); // Add the selected item to the build
    }
    else{
        setbuildFull(true);
    }
    
  }

  return (
    <div className="search-container">
      <h2>Search items</h2>
      <input type="text" value={searchTerm} onChange={checkItem} placeholder='Search...' />
      {buildFull && <p> Build full!</p>}
      <div className="items-container">
        {filteredItems.length > 0 ? (
          filteredItems.map(([id, item]) => (
            <button
              key={id}
              className="item"
              onClick={() => handleAddItemToBuild(item)}
            >
              {item.name}
            </button>
          ))
        ) : (
          <p>No matching items found</p>
        )}
      </div>
    </div>
  );
}
