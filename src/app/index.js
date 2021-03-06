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
			homeLink: "Home",
			secondLink: "Second",
			homeMounted: true
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

	onChangeLinkName2(newName){
		this.setState({
			secondLink: newName
		});
	}

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		});
	}

	render() {
		let homeCmp = "";
		if(this.state.homeMounted) {
			homeCmp = (
				<Home 
					name={"Bob"} 
					initialAge={100} 
					greet={this.onGreet} 
					changeLink={this.onChangeLinkName.bind(this)} 
					initialLinkName={this.state.homeLink} 
					changeLink2={this.onChangeLinkName2.bind(this)} 
					secondLinkName={this.state.secondLink}/>
			);
		}

		//return what needs to be rendered
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink} secondLink={this.state.secondLink}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						{homeCmp}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount home component</button>
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