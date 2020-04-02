import { Component, ReactNode } from "react";
import foodObject from "../lib/foodObject";
import Categories from "../lib/MenuCategories";
import { Grid, Tab, TabPane } from "semantic-ui-react";
import FoodItem from "./foodItem";
import tabs, { ITabs } from "../lib/Tabs";

interface MenuProps {
  MenuList: Array<foodObject>;
}

interface MenuState {
  CurrentCategoy: Categories;
}

class renderMenu extends Component<MenuProps, MenuState> {
  render() {
    const categoryKeys = Object.values(foodObject);
    console.log(categoryKeys);
    var tabs = new Array<ITabs>();

    for (let i in Categories) {
      tabs.push({
        menuItem: i,
        render: () => {
          return (
            <TabPane>
              <Grid columns="equal" stackable>
                {this.props.MenuList.map((f: foodObject) => {
                  if (f.Category == i)
                    return (
                      <Grid.Column>
                        <FoodItem item={f} disabled={false} />
                      </Grid.Column>
                    );
                })}
              </Grid>
            </TabPane>
          );
        }
      });
    }

    return <Tab panes={tabs}></Tab>;
  }
}

export default renderMenu;
