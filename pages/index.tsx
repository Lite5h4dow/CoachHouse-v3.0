import { Component } from "react";
import { Container, Header, Segment, Label } from "semantic-ui-react";
import Layout from "../components/layout";
import Axios from "axios";

class index extends Component {
  static async getServerSideProps(ctx) {
    const res = Axios({
      method: "post",
      url: `${process.env}`
    });
  }

  render() {
    return (
      <Layout>
        <Segment>
          <Label
            size={"large"}
            attached={"top left"}
            color={"green"}
            content="Specials"
          />
          <Header content={`Hello Coach House`} />
        </Segment>
      </Layout>
    );
  }
}

export default index;
