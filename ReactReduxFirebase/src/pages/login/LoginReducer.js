import {
  LOGIN_EMAIL_INPUT,
  LOGIN_PASSWORD_INPUT,
  LOGIN_FORM_VALIDATE_SUCCESS,
  LOGIN_FORM_VALIDATE_ERRO
} from "./LoginActions";

const INITIAL_STATE = {
  email: "",
  password: "",
  erroLogin: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_EMAIL_INPUT:
      return { ...state, email: action.payload };

    case LOGIN_PASSWORD_INPUT:
      return { ...state, password: action.payload };

    case LOGIN_FORM_VALIDATE_SUCCESS:
      return { ...state, email: "", password: "" };

    case LOGIN_FORM_VALIDATE_ERRO:
      return { ...state, erroLogin: action.payload };

    default:
      return state;
  }
};
