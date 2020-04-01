import { Component } from "react";
import { Container, Header, Segment, Label, Grid } from "semantic-ui-react";
import Layout from "../components/layout";
import Axios from "axios";
import https from "https";
import foodObject from "../lib/foodObject";
import RenderMenu from "../components/renderMenu";

interface MenuProps {
  MenuItems: Array<foodObject>;
}
interface MenuStatus {
  MenuCategory: String;
}

class index extends Component<MenuProps, {}> {
  static async getInitialProps(ctx) {
    const MenuItems = await Axios({
      method: "post",
      url: `http://localhost:3000/api/getItems`,
      httpsAgent: new https.Agent({ keepAlive: true })
    });
    // console.log(MenuItems.data)
    return { MenuItems: MenuItems.data };
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

          <RenderMenu MenuList={this.props.MenuItems}></RenderMenu>
        </Segment>
      </Layout>
    );
  }
}

export default index;
