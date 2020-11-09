import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Search} from './searchbar/Search';
import {ChartCont} from './chart/ChartCont';

function App() {
  let [symbolData,setSymbolData]:any = useState({});
  return (
    <>
      <Search setSymbolData={setSymbolData}></Search>,
      <ChartCont symbol={symbolData.symbol}></ChartCont>
    </>
  );
}

export default App;
