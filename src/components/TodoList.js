import { useEffect, useState } from "react";
import TodoUlist from './TodoList/TodoUlist';
import "./todolist.css";
const API_URL = 'http://localhost:3001/todos';

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	const [filter, setFilter] = useState('all');

	useEffect(() => {
		const controller = new AbortController();
		fetch(API_URL, { signal: controller.signal })
			.then((res) => res.json())
			.then((data) => setTodos(data))
			.catch((err) => console.error('Fetch error:', err));
		return () => controller.abort();
	}, []);

	const handleAdd = () => {
		const title = input.trim();
		if (!title) return;

		fetch(API_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title, completed: false }),
		})
			.then(() => {
				console.log('POST nè');
				setInput('');
				return fetch(API_URL);
			})
			.then((res) => res.json())
			.then((data) => setTodos(data));
	};

	const handleToggle = (id, completed) => {
		fetch(`${API_URL}/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ completed })
		})
			.then(() => fetch(API_URL))
			.then((res) => res.json())
			.then((data) => setTodos(data));
	};

	const handleDelete = (id) => {
		fetch(`${API_URL}/${id}`, {
			method: 'DELETE',
		})
			.then(() => fetch(API_URL))
			.then((res) => res.json())
			.then((data) => setTodos(data));
	};

	const handleEdit = (id, title) => {
		fetch(`${API_URL}/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title }),
		})
			.then(() => fetch(API_URL))
			.then((res) => res.json())
			.then((data) => setTodos(data));
	};

	const filteredTodos = todos.filter((todo) => {
		if (filter === 'completed') return todo.completed;
		if (filter === 'active') return !todo.completed;
		return true;
	});

	useEffect(() => {
		// Gán class vào body khi component mount
		document.body.classList.add('todo-body');

		// Xóa class khi rời trang
		return () => {
			document.body.classList.remove('todo-body');
		};
	}, []);
	return (
		<article className="wrapper">
			<section className="todo-wrapper">
				<h2 className="todo-title">✅ To-Do Pro</h2>
				<div className="todo-input-row">
					<input
						type="text"
						value={input}
						placeholder="Enter your task..."
						onChange={(e) => setInput(e.target.value)}
					/>
					<button onClick={handleAdd}><span>＋</span></button>
				</div>
				<div className="filter-bar">
					<button
						className={`filter-btn ${filter === 'all' ? ' active' : ''}`}
						onClick={() => setFilter('all')}
					>
						All
					</button>
					<button
						className={`filter-btn ${filter === 'completed' ? ' active' : ''}`}
						onClick={() => setFilter('completed')}
					>
						Completed
					</button>
					<button
						className={`filter-btn ${filter === 'active' ? ' active' : ''}`}
						onClick={() => setFilter('active')}
					>
						Active
					</button>
				</div>
				<TodoUlist
					todos={filteredTodos}
					onToggle={handleToggle}
					onDelete={handleDelete}
					onEdit={handleEdit}
				/>
				{/* <ul className="todo-list">
					<li className="todo-item">
						<input type="checkbox" className="todo-checkbox" />
						<span className="todo-text">Study React components</span>
						<div className="todo-actions">
							<button className="edit-btn" title="Edit">✏️</button>
							<button className="delete-btn" title="Delete">🗑️</button>
						</div>
					</li>
					<li className="todo-item completed">
						<input type="checkbox" className="todo-checkbox" checked />
						<span className="todo-text">Finish UI design</span>
						<div className="todo-actions">
							<button className="edit-btn" title="Edit">✏️</button>
							<button className="delete-btn" title="Delete">🗑️</button>
						</div>
					</li>
					<li className="todo-item">
						<input type="checkbox" className="todo-checkbox" />
						<span className="todo-text">Deploy to Firebase</span>
						<div className="todo-actions">
							<button className="edit-btn" title="Edit">✏️</button>
							<button className="delete-btn" title="Delete">🗑️</button>
						</div>
					</li>
				</ul> */}
				<div className="saved-info">
					<span>Saved automatically in LocalStorage</span>
					<span className="cloud">☁️</span>
				</div>
			</section>
		</article>
	);
};

export default TodoList;