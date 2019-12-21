// Code CoordinatesButton Component Here

import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    
    // newFunction=(e)=>{
    //     console.log(e.clientX)
    //     console.log(e.clientY)
    // }

    render(){
        return (
            <div>
             
                <button onClick={e=>this.props.onReceiveCoordinates([e.clientX, e.clientY])} >This is a button</button>
            </div>
        )
    }
}