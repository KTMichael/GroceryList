import React from "react";
import GroceryListItem from "./GroceryListItem.jsx";

const GroceryList = (props) => (
  <div className="gList">
    <span style={{ textDecoration: "underline"}}>Your Grocery List</span>
    <div>
      {props.gList.map((item, index) => (
        <GroceryListItem
          item={item}
          key={index}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  </div>
);

export default GroceryList;
