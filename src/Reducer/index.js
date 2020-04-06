import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import authReducer from "./authReducer";
 

import signUpReducer from "./SignUpReducer";

export default combineReducers({
    auth : authReducer,
    signUpReducer,
    form: formReducer
    
  });