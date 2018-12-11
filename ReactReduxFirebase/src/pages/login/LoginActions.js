import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import b64 from "base-64";
//import Expo from "expo";

export const LOGIN_EMAIL_INPUT = "LOGIN_EMAIL_INPUT";
export const LOGIN_PASSWORD_INPUT = "LOGIN_PASSWORD_INPUT";

export const LOGIN_FORM_VALIDATE_SUCCESS = "LOGIN_FORM_VALIDATE_SUCCESS";
export const LOGIN_FORM_VALIDATE_ERRO = "LOGIN_FORM_VALIDATE_ERRO";

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

export const onLoginClick = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => onLoginSuccess(dispatch))
      .catch(erro => onLoginErro(erro, dispatch));
  };
};

const onLoginSuccess = dispatch => {
  dispatch({
    type: LOGIN_FORM_VALIDATE_SUCCESS
  });
  onNavigationHome();
};

const onLoginErro = (erro, dispatch) => {
  dispatch({
    type: LOGIN_FORM_VALIDATE_ERRO,
    payload: erro.message
  });
};

export const onUserRegisterClick = () => {
  Actions.userRegister();
};

export const googleLogin = async () => {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId:
        "555892044707-8p50g1ao8k123o6h5nc5t2t965fnmg9o.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });
    if (result.type === "success") {
      let emailB64 = b64.encode(result.user.email);
      let name = result.user.name;
      firebase
        .database()
        .ref("/contact/" + emailB64)
        .push({ name })
        .then(data => {
          onNavigationHome();
        })
        .catch(err => erro(error, dispatch));
    } else {
      console.log("cancelled");
    }
  } catch (e) {
    console.log("error", e);
  }
};

const onNavigationHome = () => {
  Actions.home();
};
export const loginFacebook = async () => {
  try {
    const res = await Expo.Facebook.logInWithReadPermissionsAsync(
      "2349478588457153",
      {
        permissions: ["public_profile", "email"]
      }
    );

    if (res.type === "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(
        res.token
      );

      firebase
        .auth()
        .signInWithCredential(credential)
        .then(response => {
          debugger;
          let emailB64 = b64.encode(response.providerData[0].email);
          let name = response.displayName;
          firebase
            .database()
            .ref("/contact/" + emailB64)
            .push({ name })
            .then(data => {
              onNavigationHome();
            })
            .catch(err => erro(error, dispatch));
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      console.log(res);
    }
  } catch (e) {
    console.log(e);
  }
};
//providerData
