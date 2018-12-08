import { combineReducers } from "redux";
import LoginReducer from "../pages/login/LoginReducer";
import UserRegisterReducer from "../pages/userRegister/UserRegisterReducer";

export default combineReducers({
  LoginReducer: LoginReducer,
  UserRegisterReducer: UserRegisterReducer
});
