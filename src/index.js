import './style';
import Menu from '../_data/menu/2022-08-31-map-menuitem-list-map-name-لاته-price-45-map-name-کاپوچینو-price-33.json';

export default function App() {
	return (
		<div>
			{
				Menu.menuitem.map(item => <span>{item.name}</span>)
			}
			<h1>Hello, World!</h1>
		</div>
	);
}
