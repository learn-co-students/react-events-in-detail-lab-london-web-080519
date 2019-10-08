// // Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {


delayFn = (event) => {
    
    event.persist()
    let eventStore = event

    console.log(event)
  const timeout = this.props.delay
   
    setTimeout((() => {
        this.props.onDelayedClick(eventStore)
    }),timeout)
}

    render(){

    return(

        <button onClick={this.delayFn}></button>

    )
}
    




}