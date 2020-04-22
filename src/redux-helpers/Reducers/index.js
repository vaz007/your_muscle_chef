 import { combineReducers } from "redux";
 import { reducer as formReducer} from "redux-form";


import cartReducer from './cartReducer'
import authReducer from './authReducer'
import { reduxForm } from "redux-form";


export default combineReducers({
  form : formReducer,
  auth: authReducer,
  cart: cartReducer
});
