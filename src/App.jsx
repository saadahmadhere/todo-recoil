import { useRecoilValue } from 'recoil';
import './App.css';
import { todosState } from './store/atoms/todos';
import UserInput from './UserInput';
import Filter from './Filter';

function App() {
	const todos = useRecoilValue(todosState);

	return (
		<div className='app'>
			<UserInput />
			<h3>Todo&apos;s :-</h3>
			<div className='todo-container'>
				{todos.map((todo) => (
					<div key={todo.id} className='unit-todo'>
						<h4>title: {todo.title}</h4>
						<p>description: {todo.description}</p>
					</div>
				))}
			</div>
			<Filter />
		</div>
	);
}

export default App;
