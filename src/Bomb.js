// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends React.Component {
	// we use the constructor to set the INITIAL STATE
	constructor(props) {
		super();
		this.state = {
			secondsLeft: props.initialCount
		};
	}

	// our increment method makes use of the 'setState' method, which is what we use to alter state
	// increment = () => {
	// 	const newCount = this.state.count + 1;
	// 	this.setState({
	// 		count: newCount
	// 	});
	// };

	render() {
		// return <div onClick={this.increment}>{this.state.count}</div>;
		return (
			<div>
				{this.state.secondsLeft === 0
					? 'Boom!'
					: `${this.state.secondsLeft} seconds left before I go boom!`}
			</div>
		);
	}
}
