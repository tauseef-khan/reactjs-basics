import React from "react";

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0
		};

		setTimeout(() => {
			this.setState({
				status: 1
			})
		},3000);
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	render() {
		return (
			<div>
				<p>In a new component</p>
				{ 2 + 2 }
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<hr/>
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older! (standard JS)</button> 
				<hr/>
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older! (ES6)</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
};