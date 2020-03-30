import { Component } from "react";
import { Card } from "semantic-ui-react";
import foodObject from "../lib/foodObject";

interface ItemProps {
  disabled: boolean;
  item: foodObject;
}

class foodItem extends Component<ItemProps, {}> {
  constructor(props: Readonly<ItemProps>) {
    super(props);
  }

  render() {
    return (
      <Card
        disabled={this.props.disabled}
        header={this.props.item.Name}
        meta={`Calories: ${this.props.item.Calories}`}
        description={this.props.item.Description}
      />
    );
  }
}

export default foodItem;
