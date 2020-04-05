import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'


import signUpReducer from "./SignUpReducer";

export default combineReducers({
    signUpReducer,
    form: formReducer
    
  });