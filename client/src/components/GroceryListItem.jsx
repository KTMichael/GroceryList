import React from "react";

const GroceryListItem = (props) => (
  <div className="list">
  <li >
    <span style={{ paddingRight: "20px", paddingLeft: "20px" }}>
      {props.item.name}
    </span>
    <span style={{ paddingRight: "20px" }}>{props.item.quantity}</span>

    <button className="deleteBtn" onClick={() => props.handleDelete(props.item.name)}>Delete</button>
    </li>
  </div>
);

export default GroceryListItem;
