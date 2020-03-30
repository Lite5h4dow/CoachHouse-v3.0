import { Component } from "react";
import {
  Sidebar,
  Grid,
  Segment,
  Container,
  Button,
  Header,
  Menu,
  Icon
} from "semantic-ui-react";
import { sign } from "crypto";

interface LayoutProps {
  activeItem: string;
}
interface LayoutState {
  menuVis: boolean;
}

class layout extends Component<LayoutProps, LayoutState> {
  constructor(props: Readonly<LayoutProps>) {
    super(props);
    this.state = { menuVis: false };
    this.handleSidebar = this.handleSidebar.bind(this);
  }
  getStaticProps() {}

  handleSidebar = (sta: boolean) => {
    this.setState({ menuVis: sta });
  };

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
          inverted
          vertical
          pointing
        >
          <Menu.Item active={this.props.activeItem == "home"}>
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item active={this.props.activeItem == "favorites"}>
            <Icon name="star" />
            Favorites
          </Menu.Item>
          <Menu.Item active={this.props.activeItem == "history"}>
            <Icon name="history" />
            Order History
          </Menu.Item>
        </Sidebar>
      </Sidebar.Pushable>
    );
  }
}

export default layout;
