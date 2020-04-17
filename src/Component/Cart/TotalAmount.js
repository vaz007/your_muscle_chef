import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePrice } from "../../redux-helpers/Actions/cartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

class TotalAmount extends Component {
  render() {
    const { totalPrice } = this.props.cart;
    return (
      <div className="ui grid">
        <div class="ten wide column"></div>
        <div class="six wide column">
          <p style ={{textAlign: "right"}}>
            <strong>Delivery : </strong>
            <span>Free</span>
          </p>

          <p style ={{textAlign: "right", marginLeft : "3rem"}}>
            <strong> Total </strong>
            <FontAwesomeIcon
              icon={faRupeeSign}
            />{" "}
            {totalPrice}
          </p>

          <button className="ui right floated red button">
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
