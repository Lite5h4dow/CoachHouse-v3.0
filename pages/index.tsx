import { Component } from "react";
import { Container, Header, Segment, Label, Grid } from "semantic-ui-react";
import Layout from "../components/layout";
import Axios from "axios";
import https from "https";

class index extends Component {
  static async getInitialProps(ctx) {
    console.log(process.env.local_url);
    // const MenuItems = await Axios({
    //   method: "post",
    //   url: `${process.env.local_url}/api/getItems`,
    //   httpsAgent: new https.Agent({ keepAlive: true })
    // });

    return { MenuItems: process.env.local_url };
  }

  render() {
    console.log(this.props);
    return (
      <Layout activeItem="home">
        <Segment>
          <Label
            size={"large"}
            attached={"top left"}
            color={"green"}
            content="Specials"
          />
          <Header content={`Hello Coach House`} />
        </Segment>
        <Segment>
          <Label
            size={"large"}
            attached={"top left"}
            color={"green"}
            content="Menu"
          />
        </Segment>
      </Layout>
    );
  }
}

export default index;
