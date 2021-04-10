import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
     
    render() {
        const {count,incrementCount} = this.state
        return (
            <div>
                <button onClick={incrementCount} >Clcicked {count} Times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
