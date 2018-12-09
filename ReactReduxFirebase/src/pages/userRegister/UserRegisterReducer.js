import {
  USER_REGISTER_NAME_INPUT,
  USER_REGISTER_EMAIL_INPUT,
  USER_REGISTER_PASSWORD_INPUT,
  USER_REGISTER_FORM_VALIDATE_ERROR,
  USER_REGISTER_FORM_VALIDATE_SUCCESS
} from "./UserRegisterActions";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  errorRegister: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER_NAME_INPUT:
      return { ...state, name: action.payload };

    case USER_REGISTER_EMAIL_INPUT:
      return { ...state, email: action.payload };

    case USER_REGISTER_PASSWORD_INPUT:
      return { ...state, password: action.payload };

    case USER_REGISTER_FORM_VALIDATE_ERROR:
      return { ...state, errorRegister: action.payload };

    case USER_REGISTER_FORM_VALIDATE_SUCCESS:
      return { ...state, name: "", password: "" };

    default:
      return state;
  }
};
