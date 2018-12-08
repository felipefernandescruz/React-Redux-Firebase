export const EMAIL_INPUT = "EMAIL_INPUT";
export const PASSWORD_INPUT = "PASSWORD_INPUT";

export const emailInput = text => {
  return {
    type: EMAIL_INPUT,
    payload: text
  };
};

export const passwordInput = text => {
  return {
    type: PASSWORD_INPUT,
    payload: text
  };
};
