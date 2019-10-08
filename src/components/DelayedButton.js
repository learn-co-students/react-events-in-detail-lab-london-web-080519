// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

    // handleDelayClick = event => {
    //     setTimeout(this.props.delay)
    //     this.props.onDelayedClick(event)
    // }

    handleDelay = (event) => {
        event.persist(setTimeout(() => this.props.onDelayedClick(event), this.props.delay))
    }
    
    render () {
        return(
            <div>
                <button onClick={this.handleDelay}>Delayed Button</button>
            </div>
        )
    }
}

export default DelayedButton
