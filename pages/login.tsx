import { Component, FormEvent } from "react";

import Router from "next/router";
import {
  Segment,
  Button,
  Form,
  Header,
  Input,
  Checkbox
} from "semantic-ui-react";
import Axios from "axios";
import https from "https";
import Layout from "../components/layout";
import serialize from "serialize-form";

class login extends Component<{}, {}> {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", rememberMe: false };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (event: FormEvent<Element>) => {
    console.log(event.target);
    console.log(serialize(event.target, { hash: true }));
  };

  render() {
    return (
      <Layout activeItem="login">
        <Segment>
          <Header>Login</Header>
          <Form id="loginForm" onSubmit={this.handleLogin}>
            <Form.Field
              name="username"
              control={Input}
              label="Username"
              placeholder="joebloggs123"
              required
            />
            <Form.Field
              name="password"
              control={Input}
              label="Password"
              placeholder="password"
              type="password"
              required
            />
            <Form.Group>
              <Form.Field control={Button} content="Login" type="submit" />
              <Form.Field
                name="rememberMe"
                control={Checkbox}
                label="Remember Me"
              />
            </Form.Group>
          </Form>
        </Segment>
      </Layout>
    );
  }
}
export default login;
