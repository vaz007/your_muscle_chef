import React, { Component } from "react";
import { connect } from "react-redux";
import { showCart, addItem } from "../../redux-helpers/Actions/cartActions";

import CartItem from "./CartItem";
import TotalAmount from './TotalAmount'
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
      return <div class="ui medium header" style = {{textAlign: "center", paddingTop: "3rem"}}>Your cart looks empty</div>
    } else {
      return cartItems.map((item) => {
        return (
          <div className="ui container" key={item.id}>
            <CartItem item={item} />
          </div>
        );
      });
    }
  };

  renderTotal = () => {
    const { cartItems } = this.props.cart;
    console.log(cartItems);
    if (cartItems.length === 0) {
      return;
    } else {
        return <TotalAmount />
    }
  }
  render() {
    return (
      <div class = "ui container" style = {{marginTop: "10rem"}}>
        {this.renderCartList()}
        {this.renderTotal()}
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
