import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteItem,
  addItem,
  decrement,
} from "../../redux-helpers/Actions/cartActions";

import ChickenStirFry from '../Images/Chicken_Stir_Fry.jpg'
class CartItem extends Component {
  onCLick = (id) => {
    const { deleteItem } = this.props;
    deleteItem(id);
  };
  increment = () => {
    const { addItem } = this.props;
    addItem(this.props.item);
  };
  decrement = (id) => {
    const { item } = this.props;
    if (item.qty > 1) {
      const { decrement } = this.props;
      decrement(this.props.item);
    } else {
      const { deleteItem } = this.props;
      deleteItem(id);
    }
  };

  renderList() {
    const { item } = this.props;
    console.log(item);
    return (
      <div className="ui celled grid">
        <div className="row">
          <div className="three wide column">
            {/* Change the image code below */}
            <img src={ChickenStirFry} alt="Product Image" />
          </div>
          <div className="ten wide column">
            <p>{item.desc}</p>
            
            <div className="ui">
              <div class="ui large blue label" style={{ marginRight: "1rem" }}>
                Quantity
              </div>
              <button
                className="circular tiny ui red icon button"
                onClick={this.decrement.bind(this, item.id)}
                style={{ marginRight: "1rem" }}
              >
                Remove
              </button>
              {item.qty}
              <button
                className="tiny circular ui green icon button"
                style={{ marginLeft: "1rem" }}
                onClick={this.increment.bind(this)}
              >
                Add
              </button>
            </div>
            
          </div>
          <div className="three wide column">
            <h3>Price</h3>
            <small>{(item.price * item.qty).toFixed(2)}</small>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

export default connect(null, { deleteItem, addItem, decrement })(CartItem);
