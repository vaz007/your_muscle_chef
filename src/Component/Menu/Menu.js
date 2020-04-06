import React, { Component } from "react";
import StaticMenu from "./StaticMenu";
import "../CSS/Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10rem" }}>
        <h2 className ="ui center aligned header" id = "header">Build Your Meal with us</h2>
        <div className="ui special cards">
          <StaticMenu
            price="600"
            dishName="Chicken Stir Fry"
            macros="61.4 Cal | 68.2 P (g) | 49 C (g) | 14.4 F(g)"
            linkTo = ""
         />
          <StaticMenu
            price="400"
            dishName="Mutton"
            macros="61.4 Cal | 68.2 P (g) | 49 C (g) | 14.4 F(g)"
            linkTo = ""
          />
          <StaticMenu
            price="500"
            dishName="fish"
            macros="61.4 Cal | 68.2 P (g) | 49 C (g) | 14.4 F(g)"
            linkTo = ""
         />
        </div>
      </div>
    );
  }
}
