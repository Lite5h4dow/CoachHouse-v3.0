import { Component } from "react";
import foodObject from "../lib/foodObject";
import Categories from "../lib/MenuCategories";
import { Grid, Tab, TabPaneProps } from "semantic-ui-react";
import FoodItem from "./foodItem";

interface MenuProps {
  MenuList: Array<foodObject>;
}

interface MenuState {
  CurrentCategoy: Categories;
}

interface tabrender {
  menuItem: String;
  render: Function;
}

class renderMenu extends Component<MenuProps, MenuState> {
  render() {
    const categoryKeys = Object.values(foodObject);
    console.log(categoryKeys);
    var tabs: any;

    var test = [
      {
        menuItem: "test1",
        render: () => {
          return <div>Test</div>;
        }
      },
      {
        menuItem: "test2",
        render: () => {
          return <div>huh</div>;
        }
      }
    ];

    for (let i in Categories) {
      console.log(i);
      tabs.push({
        menuItem: i,
        render: () => {
          return (
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
          );
        }
      });
    }

    return <Tab panes={tabs}></Tab>;
  }
}

export default renderMenu;
