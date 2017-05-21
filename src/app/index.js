// required imports
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";



class App extends React.Component {
	render() {
		var user = {
			name: "TK",
			hobbies: ["Sports","Baking"]
		};

		//return what needs to be rendered
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Bob"} age={100} user={user}>
							<p>This is a paragraph demonstrates passing of information using props INDIRECTLY</p>
						</Home>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Footer/>
					</div>
				</div>
			</div>
		);
	}

}

render(<App/>, window.document.getElementById("app"));