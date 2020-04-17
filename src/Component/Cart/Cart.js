import React, { Component } from "react";
import { connect } from "react-redux";
import { showCart, addItem } from "../../redux-helpers/Actions/cartActions";

import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";
import "../CSS/Menu.css";
class Cart extends Component {
  showCart = () => {
    const { showCart } = this.props;

    console.log(showCart);
    showCart();
  };

  renderCartList = () => {
    const { cartItems } = this.props.cart;
    console.log(cartItems);
    if (cartItems.length === 0) {
      return (
        <div class="ui medium header" id="header">
          Your cart looks empty
        </div>
      );
    } else {
      return (
        <div className="ui segments">
          <div className="ui segment">
            <div class="ui medium header" id="header" style = {{color : "red"}}>
              Your Bag
            </div>
          </div>
          <div className="ui segments">
            <div className="ui segment">
              {cartItems.map((item) => {
                return (
                  <div className="ui container" key={item.id}>
                    <CartItem item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        
            <div className = "ui segment">
                {this.renderTotal()}
            </div>
        
        </div>
      );
    }
  };

  renderTotal = () => {
    const { cartItems } = this.props.cart;
    console.log(cartItems);
    if (cartItems.length === 0) {
      return;
    } else {
      return(
        <TotalAmount />
      ) ;
    }
  };
  render() {
    return (
      <div class="ui container" style={{ marginTop: "10rem" }}>
        {this.renderCartList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { showCart, addItem })(Cart);
