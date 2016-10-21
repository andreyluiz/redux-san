import React, { Component } from 'react';
import createStore from './create-store';
import '../scss/app.scss';

export default class App extends Component {
	constructor() {
		super();
		this.setInitialState();

		function reducer(state = 0, action) {
			switch (action.type) {
				case 'ADD':
					state += 1;
					break;
				case 'DEC':
					state -= 1;
					break;
				default:
					return state;
			}
			return state;
		}

		this.store = createStore(reducer);
		this.store.subscribe((state) => {
			this.setState({ value: state });
		});
	}
	setInitialState() {
		this.state = { value: 0 };
	}
	handleAdd() {
		this.store.dispatch({ type: 'ADD' })
	}
	handleDec() {
		this.store.dispatch({ type: 'DEC' });
	}
	render() {
		return (
			<div>
				<h1>{this.state.value}</h1>
				<button onClick={this.handleAdd.bind(this)}>+</button>
				<button onClick={this.handleDec.bind(this)}>-</button>
			</div>
		);
	}
}
