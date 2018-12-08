import React from "react";
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
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { emailInput, passwordInput } from "./LoginActions";
import styles from "./LoginStyle";

const mapStateToProps = state => ({
  email: state.LoginReducer.email,
  password: state.LoginReducer.password
});

const LoginPage = props => {
  return (
    <Container style={styles.Container}>
      <Content>
        <Card>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                value={props.email}
                onChangeText={text => props.emailInput(text)}
                keyboardType="email-address"
              />
            </Item>
            <Item floatingLabel last>
              <Label>Senha</Label>
              <Input
                value={props.password}
                onChangeText={text => props.passwordInput(text)}
                style={styles.input}
                secureTextEntry={true}
              />
            </Item>

            <Button block style={styles.button}>
              <Text>ENTRAR</Text>
            </Button>
            <Button style={styles.buttonFacebook} block>
              <Text>ENTRAR COM FACEBOOK</Text>
            </Button>
            <Button
              style={styles.button}
              block
              onPress={() => Actions.userRegister()}
            >
              <Text>CADASTRAR</Text>
            </Button>
          </Form>
        </Card>
      </Content>
    </Container>
  );
};

export default connect(
  mapStateToProps,
  { emailInput, passwordInput }
)(LoginPage);
