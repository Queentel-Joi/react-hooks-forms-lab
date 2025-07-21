import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([
    { id: uuid(), name: "Apples", category: "Produce" },
    { id: uuid(), name: "Cheese", category: "Dairy" },
    { id: uuid(), name: "Cake", category: "Dessert" },
  ]);

  const [searchText, setSearchText] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter search={searchText} onSearchChange={setSearchText} />
      <ul>
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default App;

