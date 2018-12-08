import React, { Component } from "react";
import {
  Container,
  Header,
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
  nameInput,
  emailInput,
  passwordInput,
  userRegister
} from "./UserRegisterActions";

const mapStateToProps = state => ({
  name: state.UserRegisterReducer.name,
  email: state.UserRegisterReducer.email,
  password: state.UserRegisterReducer.password
});

import styles from "./UserRegisterStyle";

export class UserRegisterPage extends Component {
  render() {
    return (
      <Container style={styles.Container}>
        <Content>
          <Card>
            <Form>
              <Item floatingLabel>
                <Label>Nome</Label>
                <Input
                  onChangeText={text => this.props.nameInput(text)}
                  value={this.props.name}
                />
              </Item>
              <Item floatingLabel last>
                <Label>Email</Label>
                <Input
                  onChangeText={text => this.props.emailInput(text)}
                  value={this.props.email}
                  keyboardType="email-address"
                />
              </Item>
              <Item floatingLabel last>
                <Label>Senha</Label>
                <Input
                  onChangeText={text => this.props.passwordInput(text)}
                  value={this.props.password}
                  style={styles.input}
                  secureTextEntry={true}
                />
              </Item>

              <Button
                block
                style={styles.button}
                onPress={() =>
                  this.props.userRegister(
                    ({ name, email, password } = this.props)
                  )
                }
              >
                <Text>CADASTRAR</Text>
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
  { nameInput, emailInput, passwordInput, userRegister }
)(UserRegisterPage);
