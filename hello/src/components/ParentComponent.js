import React, { Component, Pure } from 'react'
import RegComonent from './RegComonent'
import PureComponent from './Pure1Component'
import Memo from './Memo'

class ParentComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Teerth'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Vishwas'
			})
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
				{/* <RegComp name={this.state.name} />
				<PureComp name={this.state.name} /> */}
				<Memo name={this.state.name} />
			</div>
		)
	}
}

export default ParentComponent