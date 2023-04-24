import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Dashboard from './pages/Dashboard.js';
import Stocks from './pages/Stocks';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div>
			
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/About" element={<About />} />
				<Route path="/stocks/:symbol" element={<Stocks />} />
				<Route path="/stocks" element={<Stocks />} />
			</Routes>
		</div>
	);
}
export default App;
