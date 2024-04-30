import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[searchText, setSearchText] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchText(e){
    setSearchText(e.target.value)
  }



  const itemsToDisplay = items.filter((item) => {
    const nameLower = item.name.toLowerCase();
    const searchTextLower = searchText.toLowerCase();

    // if (selectedCategory === "All" && !searchTextLower) {
    //   return true;
    // } else if(selectedCategory === "All" && searchTextLower){
    //   return nameLower.includes(searchText)
    // } else if(!searchText) {
    //   return item.category === selectedCategory;
    // } else {
    //   return item.category === selectedCategory && nameLower.includes(searchTextLower)
    // }   

    if (selectedCategory === "All" && !searchText) {
      return true;
    } else if(selectedCategory === "All" && searchText){
      return item.name.includes(searchText)
    } else if(!searchText) {
      return item.category === selectedCategory;
    } else {
      return item.category === selectedCategory && item.name.includes(searchText)
    } 

  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchText} setSearchText={setSearchText} onSearchChange={handleSearchText}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
