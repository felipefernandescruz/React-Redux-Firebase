import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import LoginPage from "./pages/login/LoginPage";
import UserRegisterPage from "./pages/userRegister/UserRegisterPage";

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={LoginPage} title="Login" initial={true} />
      <Scene
        key="userRegister"
        component={UserRegisterPage}
        title="Cadastrar"
      />
    </Stack>
  </Router>
);

export default Routes;
