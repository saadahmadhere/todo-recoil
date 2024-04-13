import { useState } from 'react';
import './App.css';
import useInterval from './custom-hooks/useInterval';

function App() {
	const [count, setCount] = useState(0);

	useInterval(() => {
		setCount((c) => c + 1);
	}, 1000);
	return <div>count is {count}</div>;
}

export default App;
