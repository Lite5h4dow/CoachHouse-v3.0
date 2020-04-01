import { Component } from "react";
import { Card, Divider, ButtonGroup, Button } from "semantic-ui-react";
import foodObject from "../lib/foodObject";

interface ItemProps {
  disabled: boolean;
  item: foodObject;
}

class FoodItem extends Component<ItemProps, {}> {
  constructor(props: Readonly<ItemProps>) {
    super(props);
  }

  render() {
    return (
      <Card centered>
        <Card.Content header={this.props.item.Name} />
        <Card.Content meta={`Calories: ${this.props.item.Calories}`} />
        <Card.Content description={this.props.item.Description} />
        <Card.Content extra>
          Cost: £{this.props.item.Cost}
          <Divider />
          <ButtonGroup fluid>
            <Button basic color={"green"} content="Add To Cart" />
            <Button basic color={"red"} content="Add To Favorites" />
          </ButtonGroup>
        </Card.Content>
      </Card>
    );
  }
}

export default FoodItem;
