import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Search} from './Components/searchbar/Search';
import {ChartCont} from './Components/chart/ChartCont';
import {ISymbol} from './models/StockDataInterfaces';

function App() {
  let [symbolData,setSymbolData] = useState<ISymbol>({notation:'AMZN',description:''});
  return (
    <>
      <Search setSymbolData={setSymbolData}></Search>,
      <ChartCont symbol={symbolData.notation}></ChartCont>
    </>
  );
}

export default App;
