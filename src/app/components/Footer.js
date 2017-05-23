import React from "react";

export class Footer extends React.Component {
	render() {
		return (
			<div>
				<hr/>
				<p>Copyright {this.props.year} - {this.props.author}</p>
				{this.props.children}
			</div>
		);
	}
}

Footer.propTypes = {
	year: React.PropTypes.number,
	author: React.PropTypes.string,
	children: React.PropTypes.element.isRequired
};