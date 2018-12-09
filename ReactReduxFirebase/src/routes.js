import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import LoginPage from "./pages/login/LoginPage";
import UserRegisterPage from "./pages/userRegister/UserRegisterPage";
import WelcomePage from "./pages/welcome/WelcomePage";

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={LoginPage} title="Login" initial={true} />
      <Scene
        key="userRegister"
        component={UserRegisterPage}
        title="Cadastrar"
      />
      <Scene key="welcome" component={WelcomePage} title="Bem-Vindo" />
    </Stack>
  </Router>
);

export default Routes;
