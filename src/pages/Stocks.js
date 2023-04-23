import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data' //the two dots means go up one folder

const Stocks = () => {
	const { symbol } = useParams(); // destructure the symbol from the url params
	Data.filter((company) => company.symbol === symbol); // filter the stocks array to return only the stock that matches the symbol in the url

	const stockList = Data.map((company, index) => ( // map over the stocks array and return a div with the stock name and symbol
		<div key={index}>  {/* use the index as the key */}
			<h2> Name: {company.name} </h2>
			<h2> Symbol: {company.symbol} </h2>
			<h2> Last Price: {company.lastPrice} </h2>
		</div>
	));

	return <div>{stockList}</div>; // return the div with the list of stocks
};

export default Stocks;
