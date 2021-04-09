import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic:''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
handleTopic = (event)=>{
    this.setState({
        topic:event.target.value
    })
}
handleSubmit = (event) =>{
alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
event.preventDefault()
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text'
                        value={this.state.username}
                        onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments}
                        onChange={this.handleComment}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select vlaue={this.state.topic} onChange={this.handleTopic}>
                        <option vlaue='react'>React</option>
                        <option vlaue='vue'>Vue</option>
                        <option vlaue='angular'>Angular</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
