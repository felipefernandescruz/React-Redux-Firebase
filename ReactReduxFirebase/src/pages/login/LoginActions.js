export const LOGIN_EMAIL_INPUT = "LOGIN_EMAIL_INPUT";
export const LOGIN_PASSWORD_INPUT = "LOGIN_PASSWORD_INPUT";

export const emailInput = text => {
  return {
    type: LOGIN_EMAIL_INPUT,
    payload: text
  };
};

export const passwordInput = text => {
  return {
    type: LOGIN_PASSWORD_INPUT,
    payload: text
  };
};
