import React from "react";
import GroceryList from "./GroceryList.jsx";
import GroceryListItem from "./GroceryListItem.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryList: [],
      name: "",
      quantity: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8080/gList")
      .then((res) => {
        console.log(res.data);
        this.setState({
          groceryList: res.data,
        });
      })
      .catch((error) => console.log(error));
  }

  handleSubmit(event) {
    event.preventDefault();
    let newGList = [
      {
        name: this.state.name,
        quantity: this.state.quantity,
      },
      ...this.state.groceryList,
    ];
    axios
      .post("http://127.0.0.1:8080/gList", {
        name: this.state.name,
        quantity: this.state.quantity,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    this.setState({
      groceryList: newGList,
      name: "",
      quantity: "",
    });
  }

  handleAddItem(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  }

  handleAddQuantity(event) {
    event.preventDefault();
    this.setState(
      {
        quantity: event.target.value,
      },
      () => {
        console.log("quan");
      }
    );
  }

  handleDelete(itemName) {
    axios.delete("http://127.0.0.1:8080/gList", {
      data: { name: itemName },
    });
    this.setState({
      groceryList: this.state.groceryList.filter(
        (item) => item.name !== itemName
      ),
    });
  }


  render() {
    return (
      <div>
        <img src="grocery-bags.png" alt="Grocery Bags" className="pic" />
        <h1 className="gListTitle">Grocery List</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="itemLab"> Item: </label>
          <input className="itemLabI"
            type="text"
            value={this.state.name}
            onChange={this.handleAddItem}
          ></input>
          <label className="quanLab"> Quantity: </label>
          <input className="quanLabI"
            type="number"
            value={this.state.quantity}
            onChange={this.handleAddQuantity}
          ></input> <button  className="addItemBtn" type="submit">Add Grocery</button>
        </form>

        <GroceryList
          gList={this.state.groceryList}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
