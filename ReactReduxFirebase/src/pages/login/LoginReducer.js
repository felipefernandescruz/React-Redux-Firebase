import { LOGIN_EMAIL_INPUT, LOGIN_PASSWORD_INPUT } from "./LoginActions";

const INITIAL_STATE = {
  email: "",
  password: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_EMAIL_INPUT:
      return { ...state, email: action.payload };

    case LOGIN_PASSWORD_INPUT:
      return { ...state, password: action.payload };

    default:
      return state;
  }
};
