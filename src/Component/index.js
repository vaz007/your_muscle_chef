import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";

import SignIn from "../Component/Authentication/SignIn";
import SignUp from "../Component/Authentication/SignUp";

import FrontPage from "./FrontPage";
import Menu from "./Menu/Products";
import Cart from './Cart/Cart';

import Delivery from './Delivery/Delivery.jsx'
import history from "../history";

export default class index extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/menu" exact component={Menu} />
          <Route path = "/cart" exact component={Cart} />
          <Route path = "/delivery" exact component={Delivery} />
        </Switch>
      </Router>
    );
  }
}
