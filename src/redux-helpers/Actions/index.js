// get all the id that will be sent
// when user click on add to cart

import axios from "../../api/axios";
export const addToCart = (id, price) => async (dispatch) => {
  const response = await axios.post(`/items`);
  dispatch({
    type: "ADD_TO_CART",
    payload: response.data
  });
};

export const data = () => async (dispatch) => {
  const response = await axios.get("/items");
  console.log(response);
  dispatch({
    type: "FETCH_DATA",
    payload: response.data,
  });
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};


// All the actions 
import history from '../history';

export const signIn = userId => async dispatch => {
  dispatch ({
    type: "SIGN_IN",
    payload: userId
  
  })
  history.push("/")
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};