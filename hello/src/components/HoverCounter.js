import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class HoverCounter extends Component {

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
        const {count}=this.state
        return  <h2 onMouseOver={this.ClickHandler}>
            {this.props.name}Hovered {count}Times</h2>
        
              
           
    }
}

export default UpdatedComponent(HoverCounter)
