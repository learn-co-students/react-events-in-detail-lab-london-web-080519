// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
   



    onClickFn = (event) => {
        
        
        const data = []
        data.push(event.clientX)
        data.push(event.clientY)
        
        this.props.onReceiveCoordinates(data)
    }

    render(){
    return (

        <button onClick={this.onClickFn} ></button>
    )
    }

}