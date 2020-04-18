import React, { Component } from "react";
import { addItem, fetchData } from "../../redux-helpers/Actions/cartActions";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";
import "../CSS/Menu.css";


import Background from '../Images/background_image.png'

class Products extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  addClick = (product) => {
    const { addItem } = this.props;
    console.log("Add Item", product);
    addItem(product);
  };

  renderList() {
    if (!this.props.items) {
      return <Spinner />;
    }
    return this.props.items.map((item) => {
      return (
        <div className="card" id="card" key={item.id}>
          <div className="blurring dimmable image">
            <img src="https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?cs=srgb&dl=anise-aroma-art-bazaar-277253.jpg&fm=jpg" />
          </div>
          <div className="content">
            <a className="header">{item.dishName}</a>
            <div className="meta">
              <span className="macros">{item.macros} </span>
            </div>
          </div>
          <div className="extra content">
            <span className="left floated">
              <FontAwesomeIcon icon={faRupeeSign} /> {item.price}
            </span>
            <button
              class="small ui negative right floated button"
              onClick={() => this.addClick(item)}
            >
              <i class=" cart icon"></i>
              Add To Cart
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
    <section>
      <div className = "products">
        {/* <img src={Background} alt="cover" id = "Background_Image" /> */}
      <div className="ui container">
        <h2 className="ui center aligned header" id="header">

          Build Your Meal with us
        </h2>
        <div className="ui special cards">{this.renderList()}</div>
      </div>
      </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.cart.dataArray);
  return {
    items: state.cart.dataArray,
  };
};
export default connect(mapStateToProps, { fetchData, addItem })(Products);
