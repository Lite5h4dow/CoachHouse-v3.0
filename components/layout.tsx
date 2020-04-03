import { Component, ReactNode } from "react";
import {
  Sidebar,
  Grid,
  Segment,
  Container,
  Button,
  Header,
  Menu,
  Icon,
  MenuItem,
  Divider
} from "semantic-ui-react";
import { isNullOrUndefined } from "util";
import Axios from "axios";
import https from "https";
import Router from "next/router";

interface LayoutProps {
  activeItem: string;
}
interface LayoutState {
  menuVis: boolean;
  loginSection: ReactNode;
}

class layout extends Component<LayoutProps, LayoutState> {
  constructor(props: Readonly<LayoutProps>) {
    super(props);
    this.state = { menuVis: false, loginSection: <div></div> };
    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }
  getStaticProps() {}

  handleSidebar = (sta: boolean) => {
    this.setState({ menuVis: sta });
  };

  handleLink = (link: String) => {
    Router.push(`/${link}`);
  };

  componentDidMount() {
    if (isNullOrUndefined(window.localStorage.getItem("currentUser"))) {
      this.setState({
        loginSection: (
          <>
            <Menu.Item
              active={this.props.activeItem == "login"}
              onClick={() => {
                this.handleLink("login");
              }}
            >
              <Icon name="id badge outline" />
              Login
            </Menu.Item>
            <Menu.Item
              active={this.props.activeItem == "register"}
              onClick={() => {
                this.handleLink("register");
              }}
            >
              <Icon name="id card outline" />
              Register
            </Menu.Item>
            <Divider />
          </>
        )
      });
    } else {
      var userData = Axios({
        method: "post",
        url: "http://localhost:3000/api/getUserData",
        data: { userID: window.localStorage.getItem("currentUser") },
        httpsAgent: new https.Agent({ keepAlive: true })
      });

      userData.then(data => {
        console.log(data);
        this.setState({
          loginSection: (
            <Menu.Item>
              <Segment>
                <Header>test</Header>
              </Segment>
            </Menu.Item>
          )
        });
      });
    }
  }

  render() {
    return (
      <Sidebar.Pushable>
        <Sidebar.Pusher dimmed={this.state.menuVis}>
          <Segment attached={"bottom"}>
            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={"2"}>
                    <Button
                      circular
                      basic
                      onClick={() => {
                        this.handleSidebar(!this.state.menuVis);
                      }}
                      color={"green"}
                      floated={"left"}
                      icon={"bars"}
                    />
                  </Grid.Column>
                  <Grid.Column width={"12"}>
                    <Header
                      color={"green"}
                      textAlign={"center"}
                      content="Coach House"
                      size={"huge"}
                    />
                  </Grid.Column>
                  <Grid.Column width={"2"}>
                    <Button
                      circular
                      basic
                      color={"green"}
                      floated={"right"}
                      icon={"cogs"}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Container>{this.props.children}</Container>
        </Sidebar.Pusher>

        <Sidebar
          as={Menu}
          animation={"push"}
          visible={this.state.menuVis}
          onHide={() => {
            this.handleSidebar(false);
          }}
          borderless
          inverted
          vertical
        >
          {this.state.loginSection}
          <Menu.Item
            active={this.props.activeItem == "home"}
            onClick={() => {
              this.handleLink("");
            }}
          >
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item
            active={this.props.activeItem == "favorites"}
            onClick={() => {
              this.handleLink("Favorites");
            }}
          >
            <Icon name="star" />
            Favorites
          </Menu.Item>
          <Menu.Item
            active={this.props.activeItem == "history"}
            onClick={() => {
              this.handleLink("history");
            }}
          >
            <Icon name="history" />
            Order History
          </Menu.Item>
        </Sidebar>
      </Sidebar.Pushable>
    );
  }
}

export default layout;
