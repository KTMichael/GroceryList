import React from "react";

const GroceryListItem = (props) => (
  <li>
    <span style={{ paddingRight: "5px", paddingLeft: "5px" }}>
      {props.item.name}
    </span>
    <span style={{ paddingRight: "5px" }}>{props.item.quantity}</span>
    <button onClick={() => props.handleDelete(props.item.name)}>X</button>
  </li>
);

export default GroceryListItem;
