import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Field, reduxForm } from "redux-form";
import validate from "./Validation/validate";

import Cover from "./Images/signin_register.jpg";

import "./CSS/SignIn.css";

const Check = ({ input, meta: { touched, error } }) => (
  <div style={{ border: touched && error ? "1px solid red" : "" }}>
    <input type="checkbox" {...input} />
  </div>
);

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="FormField__Input"
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    if (Object.keys(validate(this.state)).length > 0) {
      return alert("Please Check all the details");
    } else {
      console.log("The form was submitted with the following data:");
      console.log(this.state);
    }
  };

  render() {
    return (
        <div>
        <img src = {Cover} />
         <div class="ui placeholder segment" id = "segment"> 
          <div class="ui two column very relaxed stackable grid">
            <div class="column">
              <div class="ui form">
                <div class="field">
                  <label>Username</label>
                  <div class="ui left icon input">
                    <input type="text" placeholder="Username" />
                    <i class="user icon" />
                  </div>
                </div>
                <div class="field">
                  <label>Password</label>
                  <div class="ui left icon input">
                    <input type="password" />
                    <i class="lock icon"></i>
                  </div>
                </div>
                <div class="ui blue submit button">Login</div>
              </div>
            </div>
            <div class="middle aligned column">
              <div class="ui big button">
                <i class="signup icon"></i>
                Sign Up
              </div>
            </div>
          </div>
          <div class="ui vertical divider">Or</div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignIn);
