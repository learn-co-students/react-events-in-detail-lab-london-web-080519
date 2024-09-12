// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    return setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  };

  render() {
    return (
      <button
        onClick={event => {
          event.persist();
          this.handleClick(event);
        }}
      ></button>
    );
  }
}

export default DelayedButton;
