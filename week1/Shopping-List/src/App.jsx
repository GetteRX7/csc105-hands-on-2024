import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addItem = () => {
    if (editText.trim() === "") return;
    setItems([...items, editText]);
    setEditText("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setEditingIndex(index);
    setEditText(items[index]);
  };

  const saveEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = editText;
    setItems(updatedItems);
    setEditingIndex(null);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addItem} className="add-btn">Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {editingIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => saveEdit(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEdit(index);
                  if (e.key === "Escape") setEditingIndex(null);
                }}
                autoFocus
                className="edit-input"
              />
            ) : (
              <span>{item}</span>
            )}
            <div>
              {editingIndex === index ? (
                <button onClick={() => saveEdit(index)} className="save-btn">Save</button>
              ) : (
                <button onClick={() => editItem(index)} className="edit-btn">Edit</button>
              )}
              <button onClick={() => removeItem(index)} className="remove-btn">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
