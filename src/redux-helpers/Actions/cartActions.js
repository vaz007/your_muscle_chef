import {
    SHOW_CART,
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_PRICE,
    DECREMENT_QTY
  } from './types';

  
import axios from "../../api/axios";
  
import history from '../../history';

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



// Cart Actions 

export const showCart = () => {
    return {type : SHOW_CART}
}

export const addItem = product => async (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload: product
    });
    dispatch(updatePrice())
}

export const deleteItem = id => dispatch => {
    dispatch({
        type : DELETE_ITEM,
        payload: id
    })
    
    dispatch(updatePrice())
}

export const updatePrice = () => {
    return{
        type : UPDATE_PRICE
    }
}
export const decrement = product => dispatch => {
    dispatch({
        type : DECREMENT_QTY,
        payload : product
    })
} 

export const fetchData = () => async (dispatch) => {
    const response = await axios.get("/items");
    console.log(response);
    dispatch({
      type: "FETCH_DATA",
      payload: response.data,
    });
  };
  