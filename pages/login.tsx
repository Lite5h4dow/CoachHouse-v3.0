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
import { serialize } from "react-serialize";

interface loginState {
  username: String;
  password: String;
  rememberMe: boolean;
}

class login extends Component<{}, loginState> {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", rememberMe: false };
    this.handleLogin = this.handleLogin.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateRemember = this.updateRemember.bind(this);
  }

  handleLogin = () => {
    var user = Axios({
      method: "post",
      url: "http://localhost:3000/api/login",
      data: {
        uname: this.state.username,
        pword: this.state.password
      },
      httpsAgent: new https.Agent({ keepAlive: true })
    });

    user.then(r => {
      if (r.status == 200) {
        Router.push(`/${r.data.userID}`);
      } else {
        alert(r.data.message);
      }
    });

    user.catch(r => {
      console.log(r);
    });
  };

  updateUsername = (e: any) => {
    this.setState({ username: e.target.value });
  };

  updatePassword = (e: any) => {
    this.setState({ password: e.target.value });
  };

  updateRemember = (e: any, { checked }) => {
    this.setState({ rememberMe: checked });
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
              onChange={this.updateUsername}
              value={this.state.username}
              required
            />
            <Form.Field
              name="password"
              control={Input}
              label="Password"
              placeholder="password"
              type="password"
              onChange={this.updatePassword}
              value={this.state.password}
              required
            />
            <Form.Group>
              <Form.Field control={Button} content="Login" type="submit" />
              <Form.Field
                name="rememberMe"
                control={Checkbox}
                label="Remember Me"
                onChange={this.updateRemember}
              />
            </Form.Group>
          </Form>
        </Segment>
      </Layout>
    );
  }
}
export default login;
