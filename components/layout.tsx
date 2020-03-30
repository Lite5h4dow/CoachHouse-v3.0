import { Component } from "react";
import {
  Sidebar,
  Grid,
  Segment,
  Container,
  Button,
  Header
} from "semantic-ui-react";

class layout extends Component {
  constructor(props) {
    super(props);
  }
  getStaticProps() {}

  render() {
    return (
      <Sidebar.Pushable>
        <Sidebar.Pusher>
          <Segment attached={"bottom"}>
            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={"2"}>
                    <Button
                      circular
                      basic
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
      </Sidebar.Pushable>
    );
  }
}

export default layout;
