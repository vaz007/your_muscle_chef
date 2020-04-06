import React, { Component } from 'react'

export default class FacebookAuth extends Component {
    componentDidMount(){
        
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
