// Code DelayedButton Component Here

import React, {Component} from 'react'

export default class Delayedbutton extends Component {

    handleClick=(event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay);
    }

    render(){
        return (
            <div>
             
                <button onClick={this.handleClick} >This is a button</button>
            </div>
        )
    }
}