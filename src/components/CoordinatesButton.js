// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    let coordinatesArray = [event.clientX, event.clientY];
    return this.props.onReceiveCoordinates(coordinatesArray);
  };

  render() {
    return <button onClick={event => this.handleClick(event)}></button>;
  }
}

export default CoordinatesButton;
