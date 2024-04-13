import { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('');

	// const handleDebounce = (val) => setName(val);

	const debounce = (cb, timer) => {
		let timerId;
		return (arg) => {
			clearTimeout(timerId);

			timerId = setTimeout(() => {
				cb(arg);
			}, [timer]);
		};
	};

	// const debounceChangeHandler = debounce(() => {}, 500)

	return (
		<div>
			<input
				type='text'
				value={name}
				// onChange={(e) => debounceChangeHandler(e.target.value)}
				onChange={(e) => debounce((val) => setName(val), 500)(e.target.value)}
			/>
			<h4>Name is {name}</h4>
		</div>
	);
}

export default App;
