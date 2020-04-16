import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from '../redux-helpers/Actions/cartActions';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Link, withRouter } from "react-router-dom";
import history from '../history'

// const responseFacebook = (response) => {
//     console.log(response);
//     history.push("/")
        
//     return response;
//   };

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
  
class FacebookAuth extends Component {
    state = {
        isLoggedIn: false,
        userId: "",
        name: "",
        email: "",
        picture: "",
      };

      responseFacebook = (response) => {
        this.setState({
          isLoggedIn: true,
          userId: response.userId,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url,
        });
        this.props.signIn(this.state.userId)
        history.push("/")
        
      };
    
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt="Picture" />
          <h2>Welcome {this.state.name}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="app id"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={(renderProps) => renderButton(renderProps)}
        />
      );
      }
    return (
      <div>
        <h1>{fbContent}</h1>
      </div>
    );
  }
}
// const mapStateToProps = (state) =>{
//   return {isSignedIn : state.auth.isSignedIn}
// }

export default connect(null, {signIn, signOut}) (FacebookAuth);

