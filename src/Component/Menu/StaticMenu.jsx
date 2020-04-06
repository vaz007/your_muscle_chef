import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

import ChickenStirFry from "../Images/Chicken_Stir_Fry.jpg";

import "../CSS/Menu.css";

export default class StaticMenu extends Component {
  render() {
    return (
      <div className="card" id="card">
        <div className="blurring dimmable image">
          <img src={ChickenStirFry} />
        </div>
        <div className="content">
          <a className="header">{this.props.dishName}</a>
          <div className="meta">
            <span className="macros">{this.props.macros} </span>
          </div>
        </div>
        <div className="extra content">
          <span className="left floated like">
            <FontAwesomeIcon icon={faRupeeSign} /> {this.props.price}
          </span>
          <span className="right floated" style = {{color : "red"}}>
            <Link to= {this.props.linkTo}>
              <i className="cart icon"></i>
              ADD To Cart
            </Link>
          </span>
        </div>
      </div>
    );
  }
}
