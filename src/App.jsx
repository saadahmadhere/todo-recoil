import { useState } from 'react';
import './App.css';
import useDebounce from './custom-hooks/useDebounce';

function App() {
	const [name, setName] = useState('');
	const debouncedValue = useDebounce(name, 500);

	return (
		<div>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<h4>Name is {debouncedValue}</h4>
		</div>
	);
}

export default App;
