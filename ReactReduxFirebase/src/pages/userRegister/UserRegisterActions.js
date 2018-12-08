import firebase from "firebase";

export const NAME_INPUT = "NAME_INPUT";
export const EMAIL_INPUT = "EMAIL_INPUT";
export const PASSWORD_INPUT = "PASSWORD_INPUT";

export const nameInput = text => {
  return {
    type: NAME_INPUT,
    payload: text
  };
};

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

export const userRegister = ({ name, email, password }) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => success(user))
    .catch(error => erro(error));

  return {
    type: "text"
  };
};

function success(text) {
  debugger;
  console.log("Sucesso: " + text);
}

function erro(text) {
  console.log("erro: " + text);
}
