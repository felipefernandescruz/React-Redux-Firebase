import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import styles from "./styles";

import LoginPage from "./pages/login/LoginPage";
import UserRegisterPage from "./pages/userRegister/UserRegisterPage";
import WelcomePage from "./pages/welcome/WelcomePage";
import HomePage from "./pages/home/homePage";

const Routes = () => (
  <Router
    navigationBarStyle={styles.toolbarNavigationBarStyle}
    titleStyle={styles.toolbarTitleStyle}
  >
    <Stack key="root">
      <Scene
        key="login"
        component={LoginPage}
        title="Login"
        hideNavBar={true}
        initial={true}
      />
      <Scene
        key="userRegister"
        component={UserRegisterPage}
        title="Cadastrar"
        hideNavBar={false}
      />
      <Scene
        key="welcome"
        component={WelcomePage}
        title="Bem-Vindo"
        hideNavBar={true}
      />
      <Scene key="home" component={HomePage} title="home" hideNavBar={true} />
    </Stack>
  </Router>
);

export default Routes;
