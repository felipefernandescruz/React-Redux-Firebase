import { EMAIL_INPUT, PASSWORD_INPUT } from "./LoginActions";

const INITIAL_STATE = {
  email: "",
  password: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_INPUT:
      return { ...state, email: action.payload };

    case PASSWORD_INPUT:
      return { ...state, password: action.payload };

    default:
      return state;
  }
};
