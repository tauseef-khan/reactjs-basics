// required imports
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";



class App extends React.Component {
	
	constructor() {
		super();
		this.state = {
			homeLink: "Home"
		};
	}

	onGreet() {
		alert("Hello!");
	}

	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		});
	}

	render() {
		//return what needs to be rendered
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Bob"} initialAge={100} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Footer year={2017} author={"Tauseef Khan"}>
							<p>Passing information indirectly again</p>
						</Footer>
					</div>
				</div>
			</div>
		);
	}

}

render(<App/>, window.document.getElementById("app"));