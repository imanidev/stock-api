import React from 'react';
import { useParams } from 'react-router-dom';

const Stocks = () => {
	const param = useParams();
	const symbol = param.symbol;
	return <div>Symbol:{symbol}</div>;
};

export default Stocks;
