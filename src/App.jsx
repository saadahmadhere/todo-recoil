import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './store/atoms/todoFamily';

function App() {
	return (
		<RecoilRoot>
			<Todo id={1} />
			<Todo id={2} />
			<Todo id={2} />
			<Todo id={3} />
		</RecoilRoot>
	);
}

function Todo({ id }) {
	const todo = useRecoilValueLoadable(todosAtomFamily(id));

	if (todo.state === 'loading') {
		return <div>Loading...</div>;
	}
	if (todo.state === 'hasError') {
		return <div> backend returned error.</div>;
	}
	return (
		<>
			{todo.contents.title}
			{todo.contents.description}
			<br />
		</>
	);
}

export default App;
