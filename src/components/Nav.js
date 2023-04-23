import { Link } from 'react-router-dom';

export default function Nav(props) {
	return (
		<div className="nav">
			<Link to="/">
				<div>Home</div>
			</Link>
			<Link to="/About">
				<div>About</div>
			</Link>
			<Link to="/Stocks">
				<div>Stocks</div>
			</Link>
		</div>
	);
}
