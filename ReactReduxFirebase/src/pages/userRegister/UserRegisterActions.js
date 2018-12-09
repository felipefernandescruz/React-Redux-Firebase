import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const USER_REGISTER_NAME_INPUT = "USER_REGISTER_NAME_INPUT";
export const USER_REGISTER_EMAIL_INPUT = "USER_REGISTER_EMAIL_INPUT";
export const USER_REGISTER_PASSWORD_INPUT = "USER_REGISTER_PASSWORD_INPUT";
export const USER_REGISTER_FORM_VALIDATE_ERROR =
  "USER_REGISTER_FORM_VALIDATE_ERROR";
export const USER_REGISTER_FORM_VALIDATE_SUCCESS =
  "USER_REGISTER_FORM_VALIDATE_SUCCESS";

export const nameInput = text => {
  return {
    type: USER_REGISTER_NAME_INPUT,
    payload: text
  };
};

export const emailInput = text => {
  return {
    type: USER_REGISTER_EMAIL_INPUT,
    payload: text
  };
};

export const passwordInput = text => {
  return {
    type: USER_REGISTER_PASSWORD_INPUT,
    payload: text
  };
};

export const userRegister = ({ name, email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => success(user, dispatch))
      .catch(error => erro(error, dispatch));
  };
};

const success = (user, dispatch) => {
  console.log(user);
  dispatch({ type: USER_REGISTER_FORM_VALIDATE_SUCCESS });
  Actions.welcome();
};

const erro = (erro, dispatch) => {
  dispatch({ type: USER_REGISTER_FORM_VALIDATE_ERROR, payload: erro.message });
};
