import {
  Segment,
  Button,
  Form,
  Header,
  Input,
  Checkbox
} from "semantic-ui-react";
import https from "https";
import Router from "next/router";
import Axios from "axios";
import Layout from "../components/layout";

import { Component } from "react";

interface registerState {
  username: String;
  forename: String;
  surname: String;
  email: String;
  password: String;
  passwordc: String;
}

class Register extends Component<{}, registerState> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      forename: "",
      surname: "",
      email: "",
      password: "",
      passwordc: ""
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeForename = this.changeForename.bind(this);
    this.changeSurname = this.changeSurname.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changePasswordc = this.changePasswordc.bind(this);
  }

  handleRegister = (e: any) => {};

  changeUsername = (e: any) => {
    this.setState({ username: e.target.value });
  };

  changeForename = (e: any) => {
    this.setState({ forename: e.target.value });
  };

  changeSurname = (e: any) => {
    this.setState({ surname: e.target.value });
  };

  changeEmail = (e: any) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e: any) => {
    this.setState({ password: e.target.value });
  };

  changePasswordc = (e: any) => {
    this.setState({ passwordc: e.target.value });
    if (this.state.password != this.state.passwordc) {
      e.target.error = { content: "Passwords don't Match", pointing: "below" };
    } else {
      e.target.error = {};
    }
  };

  render() {
    return (
      <Layout activeItem="Register">
        <Segment>
          <Header> Register </Header>
          <Form id="registerForm" onSubmit={this.handleRegister}>
            <Form.Group widths="equal">
              <Form.Field
                name="forename"
                control={Input}
                label="Forename"
                placeholder="Joe"
                onChange={this.changeForename}
                value={this.state.forename}
                required
              />

              <Form.Field
                name="surname"
                control={Input}
                label="Surname"
                placeholder="Bloggs"
                onChange={this.changeSurname}
                value={this.state.surname}
                required
              />
            </Form.Group>
            <Form.Field
              name="email"
              control={Input}
              label="E-mail Address"
              placeholder="joe.bloggs123@gmail.com"
              type="email"
              onChange={this.changeEmail}
              value={this.state.email}
              required
            />
            <Form.Field
              name="username"
              control={Input}
              label="Username"
              placeholder="joebloggs123"
              onChange={this.changeUsername}
              value={this.state.username}
              required
            />
            <Form.Group widths="equal">
              <Form.Field
                name="password"
                control={Input}
                label="Password"
                placeholder="password"
                type="password"
                onChange={this.changePassword}
                value={this.state.password}
                required
              />

              <Form.Field
                name="passwordc"
                control={Input}
                label="Confirm Password"
                placeholder="password"
                type="password"
                onChange={this.changePasswordc}
                value={this.state.passwordc}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Field control={Button} content="Register" type="submit" />
            </Form.Group>
          </Form>
        </Segment>
      </Layout>
    );
  }
}

export default Register;
