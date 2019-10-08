// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {

    handleClickEvent = (event) => {
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinates([x,y])
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickEvent} >Coordinates Button</button>
            </div>
        )
    }
}

export default CoordinatesButton