import React, { Component, component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    ChangeMessage(){
        this.setState({
            message:'Thanks for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={() => this.ChangeMessage()}>Subscribe</button>
            </div>
        )
    }

}

export default Message