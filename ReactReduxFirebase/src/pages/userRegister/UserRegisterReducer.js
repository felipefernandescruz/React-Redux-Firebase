import { NAME_INPUT, EMAIL_INPUT, PASSWORD_INPUT } from "./UserRegisterActions";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_INPUT:
      return { ...state, name: action.payload };

    case EMAIL_INPUT:
      return { ...state, email: action.payload };

    case PASSWORD_INPUT:
      return { ...state, password: action.payload };

    default:
      return state;
  }
};
