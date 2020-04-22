import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Field, reduxForm } from "redux-form";
import validate from "./Validation/validate";

import Cover from "../Images/signin_register.jpg";

import GoogleAuth from "./GoogleAuth";

import FacebookAuth from "./FacebookAuth";

import "./StyleSheetAuthentication.css";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div style={{ color: "red" }}>
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
    console.log("The form was submitted with the following data:", this.state);

    // Add code for the modal if errors popped

    if (Object.keys(validate(this.state)).length > 0) {
      return alert("Please Check all the details");
    } else {
      console.log("The form was submitted with the following data:");
      console.log(this.state);
    }
  };

  renderSignInPage() {}

  render() {
    return (
      <section>
        <div className="signIn">
          <img src={Cover} alt="cover" />

          <div className="ui placeholder segment" id="segment">
            <form onSubmit={this.handleSubmit} className="FormField">
              <div className="ui two column very relaxed stackable grid">
                <div className="column">
                  <div className="ui form">
                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="email">
                        E-Mail Address
                      </label>
                      <Field
                        label="E-mail"
                        className="FormField__Input"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        autoComplete="off"
                        value={this.state.email}
                        onChange={this.handleChange}
                        component={renderField}
                      />
                    </div>
                    <div className="FormField">
                      <label className="FormField__Label" htmlFor="password">
                        Password
                      </label>
                      <Field
                        label="Must Be 8 characters"
                        type="password"
                        id="password"
                        className="FormField__Input"
                        placeholder="Enter your password"
                        name="password"
                        autoComplete="off"
                        value={this.state.password}
                        onChange={this.handleChange}
                        component={renderField}
                      />
                    </div>
                    <div
                      className="ui submit button"
                      className="FormField__Button"
                      onClick={this.handleSubmit}
                    >
                      Login
                    </div>{" "}
                    <br />
                    <Link to="/signup" className="FormField__Link">
                      Not a member Join Now
                    </Link>
                  </div>
                </div>

                <div className="middle aligned column">
                  <div className="socialButton">
                    <FacebookAuth />
                    {/* Add client id in google auth to check google login button */}
                    <GoogleAuth />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: "signInForm", // a unique identifier for this form
  validate,
})(SignIn);
