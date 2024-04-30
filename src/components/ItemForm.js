import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [input, setInput] = useState("");
  const [itemFormCategory, setItemFormCategory] = useState("Produce");
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: input,
    category: itemFormCategory,
  });

  function handleInput(e) {
    setInput(e.target.value);
    setNewItem({ ...newItem, name: e.target.value });
  }
  function handleItemFormCategory(e) {
    setItemFormCategory(e.target.value);
    setNewItem({ ...newItem, category: e.target.value });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onItemFormSubmit({ ...newItem, id: uuid() });
      }}
      className="NewItem"
    >
      <label>
        Name:
        <input onChange={handleInput} value={input} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleItemFormCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
