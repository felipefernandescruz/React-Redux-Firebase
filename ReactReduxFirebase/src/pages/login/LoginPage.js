import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Card,
  Button,
  Text,
  Label
} from "native-base";
import { connect } from "react-redux";

import {
  emailInput,
  passwordInput,
  onLoginClick,
  onUserRegisterClick,
  googleLogin,
  loginFacebook
} from "./LoginActions";
import styles from "./LoginStyle";

const mapStateToProps = state => ({
  email: state.LoginReducer.email,
  password: state.LoginReducer.password,
  erroLogin: state.LoginReducer.erroLogin
});

export class LoginPage extends Component {
  render() {
    return (
      <Container style={styles.Container}>
        <Content>
          <Card>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  value={this.props.email}
                  onChangeText={text => this.props.emailInput(text)}
                  keyboardType="email-address"
                />
              </Item>
              <Item floatingLabel last>
                <Label>Senha</Label>
                <Input
                  value={this.props.password}
                  onChangeText={text => this.props.passwordInput(text)}
                  style={styles.input}
                  secureTextEntry={true}
                />
              </Item>
              <Text style={styles.errorMessage}>{this.props.erroLogin}</Text>

              <Button
                block
                style={styles.button}
                onPress={() =>
                  this.props.onLoginClick(({ email, password } = this.props))
                }
              >
                <Text>ENTRAR</Text>
              </Button>
              <Button
                style={styles.buttonFacebook}
                block
                onPress={() => onUserRegisterClick()}
              >
                <Text>CADASTRAR</Text>
              </Button>
              <Button style={styles.button} block onPress={() => googleLogin()}>
                <Text>ENTRAR COM GOOGLE</Text>
              </Button>
              <Button
                style={styles.buttonFacebook}
                block
                onPress={() => loginFacebook()}
              >
                <Text>ENTRAR COM FACEBOOK</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  { emailInput, passwordInput, onLoginClick }
)(LoginPage);
