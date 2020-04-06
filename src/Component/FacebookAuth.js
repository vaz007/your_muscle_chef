import React, { Component } from 'react'

export default class FacebookAuth extends Component {
    componentDidMount(){
        
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '559682971325310',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
  };
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
