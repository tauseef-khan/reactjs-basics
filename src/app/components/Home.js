import React from "react";

export class Home extends React.Component {

	constructor(props) {
		super();
		this.state = {
			age: props.initialAge,
			status: 0,
			homeLink: props.initialLinkName,
			secondLink: props.secondLinkName
		};

		setTimeout(() => {
			this.setState({
				status: 1
			})
		},3000);
		console.log("constructor");
	}

	componentWillMount() {
		//first method executed in the component lifecycle hook
		console.log("component will mount");
	}

	componentDidMount() {
		//second method executed in the component lifecycle hook
		console.log("component did mount");
	}

	componentWillRecieveProps(nextProps) {
		//third method executed in the component lifecycle hook
		console.log("component will recieve props", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		//fourth method executed in the component lifecycle hook
		console.log("should component update", nextProps, nextProps);

		//block the rendering (updates) of state after it changes to 1 because returning flase doesn;t execute methods below (5th, 6th, 7th)
		//if(nextState.status === 1) {
		//	return false;
		//}

		//to continue return 'true'
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		//fifth method executed in the component lifecycle hook
		console.log("component will update", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		//sixth method executed in the component lifecycle hook
		console.log("component did update", prevProps, prevState);
	}

	componentWillUnmount() {
		//seventh method executed in the component lifecycle hook
		console.log("component will unmount");
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink(){
		this.props.changeLink(this.state.homeLink);
	}

	onChangeLink2(){
		this.props.changeLink2(this.state.secondLink)
	}

	onHandleChange(event){
		this.setState({
			homeLink: event.target.value
		});
	}

	onHandleChange2(event){
		this.setState({
			secondLink: event.target.value
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
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
				<hr/>
				<input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
				<button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
				<hr/>
				<input type="text" value={this.state.secondLink} onChange={(event) => this.onHandleChange2(event)} />
				<button onClick={this.onChangeLink2.bind(this)} className="btn btn-primary">Change Second Link</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	initialAge: React.PropTypes.number,
	greet: React.PropTypes.func,
	initialLinkName: React.PropTypes.string,
	secondLinkName: React.PropTypes.string
};