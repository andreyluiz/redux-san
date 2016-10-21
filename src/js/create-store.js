export default function createStore(reducer) {
	let state;
	let listeners = [];

	const getState = () => state;

	const subscribe = (listener) => {
		listeners.push(listener);
		return function unsubscribe(listener) {
			let index = listeners.indexOf(listener);
			listeners.splice(index, 1);
		}
	}

	const dispatch = (action) => {
		state = reducer(state, action);
		for (let listener of listeners) {
			listener(state);
		}
	}

	dispatch({});

	return { getState, subscribe, dispatch };
}
