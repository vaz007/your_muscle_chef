import React, { Component } from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//Insert dropdown code later on for goal based diet

// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";


import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
// change logo
import logo from "./Images/logo192.png";


//add bootstrap css

import "bootstrap/dist/css/bootstrap.min.css";

const style = {
  navItem: {
    color: "white",
    marginRight : "1rem"
  },
  navbarBrandLogo : {
    
    marginRight : "2rem"
  },
  cartLogo : {
    marginLeft: "0.5rem"
  }
};

export default class Navb extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/" style = {style.navbarBrandLogo}>
          <img src={logo} alt="Logo"  style={{ height: "2rem" }} />
          Your Muscle Chef
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="menu" style={style.navItem}>
              <Nav.Item>Menu</Nav.Item>
            </Link>
            <Link to="/cart" style={style.navItem}>
              <Nav.Item>
                Cart
                <AddShoppingCartOutlinedIcon style={style.cartLogo} />
              </Nav.Item>
            </Link>
            <Link to="" style={style.navItem}>
              <Nav.Item>Order Now</Nav.Item>
            </Link>
            <Link to="/signin" style={style.navItem}>
              <Nav.Item>Sign In</Nav.Item>
            </Link>
            <Link to="/signup" style={style.navItem}>
              <Nav.Item>Register</Nav.Item>
            </Link>

            <Link to="/delivery" style={style.navItem}>
              <Nav.Item>Delivery</Nav.Item>
            </Link>


            {/* <NavDropdown title="Goal Based" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Muscle Gain</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Performance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Calorie Control</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
