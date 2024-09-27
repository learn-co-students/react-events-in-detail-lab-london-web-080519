// Code CoordinatesButton Component Here
import React from "react";

export default class CoordinatesButton extends React.Component {
  
  handleClick = event => {
    let positionArray = [event.screenX, event.screenY]
    return this.props.onReceiveCoordinates(positionArray)
  };

  render() {
    return <button onClick={this.handleClick}>Coordinates button</button>;
  }
}
