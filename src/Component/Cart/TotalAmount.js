import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePrice } from "../../redux-helpers/Actions/cartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

class TotalAmount extends Component {
  render() {
    const { totalPrice } = this.props.cart;
    return (
      <div className="total-amount">
        <p>
          <strong>Delivery : </strong>
          <span>Free</span>
        </p>
        <p>
          <strong style = {{marginRight: "3px"}}> Total </strong>
          <FontAwesomeIcon icon={faRupeeSign} style = {{marginRight: "3px"}}/> {totalPrice}
        </p>
        <div className="text-center">
          <button type="button" className="btn-custom disabled" disabled>
            Go to checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { updatePrice })(TotalAmount);
