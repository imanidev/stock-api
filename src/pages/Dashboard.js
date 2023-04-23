import React from 'react';
import Data from '../Data';
// import stocks from '../Data';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	const stocksArr = Data.map((item, index) => {
		// map over the stocks array and return a div with the stock name and symbol
		return (
			<div>
				<Link to={`/Stocks/${item.symbol}/${index}`}>
					<h2>{item.name}</h2>
				</Link>
			</div>
		);
	});
	return <div>{stocksArr}</div>; // return the array of divs containing the stock names and symbols
};

export default Dashboard;
