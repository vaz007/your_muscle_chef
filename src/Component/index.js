import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Menu from "./Menu/Menu";
import FrontPage from "./FrontPage";
import Cart from './Cart/Cart';


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
        </Switch>
      </Router>
    );
  }
}
