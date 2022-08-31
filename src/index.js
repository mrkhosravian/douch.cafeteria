import './style';
import menu from "../_data/menu.json"

export default function App() {
	return (
		<div>
			{
				menu.pizza.map(item => <span>{item.name}</span>)
			}
			<h1>Hello, World!</h1>
		</div>
	);
}
