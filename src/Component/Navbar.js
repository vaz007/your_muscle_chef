import React, { Component } from "react";
import logo from "../Images/logo192.png";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="ui inverted top fixed menu">
        <div className="item">
          <Link to="/">
            <img src={logo} alt = "Logo" style={{ height: "2rem" }} />
          </Link>
        </div>
        <Link to="menu" className="item">
          Menu
        </Link>

        <div className="ui simple dropdown item">
          Order Now
          <div className="menu">
            <Link to="" className="item">
              Goal Based
            </Link>
            <Link to="" className="item">
              Muscle Gain
            </Link>
            <Link to="" className="item">
              Performance
            </Link>
            <Link to="" className="item">
              Calorie Control
            </Link>
          </div>
        </div>

        <Link to="" className="item">
          Dilevery
        </Link>
        <Link to="/signin" className="item">
          Sign-in
        </Link>
        <Link to="signup" className="item">
          Sign-Up
        </Link>
        <div className="right item">
          <AddShoppingCartOutlinedIcon />
        </div>
      </div>
    );
  }
}
