import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const responseFacebook = (response) => {
  console.log(response);
  return response;
};

const renderButton = (renderProps) => {
  return (
    <div className="socialButton">
      <button onClick={renderProps.onClick} className="ui facebook button">
        <i className="facebook icon"></i>
        Login Facebook
      </button>
    </div>
  );
};
export default class FacebookAuth extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <FacebookLogin
          appId="App_Id"
          callback={responseFacebook}
          render={(renderProps) => renderButton (renderProps)} 
        />
      </div>
    );
  }
}
