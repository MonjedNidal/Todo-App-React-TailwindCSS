import "./App.css";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, newIndex) => {
    event.preventDefault();
    const oldIndex = event.dataTransfer.getData("text/plain");
    const newItems = [...items];
    const [draggedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, draggedItem);
    setItems(newItems);
  };

  return (
    <div className="App">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
