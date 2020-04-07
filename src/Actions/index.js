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