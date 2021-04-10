import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class ClcikCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    ClickHandler = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        const { count } = this.state
        return <button onClick={this.ClickHandler}>{this.props.name}Clicked {count} Times</button>


    }
}

export default UpdatedComponent(ClcikCounter)
