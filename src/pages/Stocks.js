import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data"; //the two dots means go up one folder

const Stocks = () => {
  const params = useParams();
  const symbol = params.symbol;
  console.log(symbol);
  console.log(Data);
  let filteredData;

  if (symbol) {
    filteredData = Data.filter((company) => company.symbol === symbol); // filter the stocks array to return only the stock that matches the symbol in the url
  } else {
    filteredData = Data;
  }

  const stockList = filteredData.map(
    (
      company,
      index // map over the stocks array and return a div with the stock name and symbol
    ) => (
      <div key={index} className="stocklist">
        {" "}
        {/* use the index as the key */}
        <h2> {company.name} </h2>
        <h2> {company.symbol} </h2>
        <h2>
          {" "}
          Last Price: <span className="lstprc">{company.lastPrice}</span>{" "}
        </h2>
      </div>
    )
  );

  return <div>{stockList}</div>; // return the div with the list of stocks
};

export default Stocks;
