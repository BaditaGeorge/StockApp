import React,{ Dispatch, SetStateAction } from 'react';
import {ISymbol} from '../models/StockDataInterfaces';
import {IStockData} from '../models/StockDataInterfaces';
import {IChartData,IDatasetData} from '../models/ChartDataInterfaces';
import {getSearchResultStyle} from '../styles/SearchStyle';

export function createSearchResults(symbolsArray:Array<ISymbol>,content:string,setResults:Dispatch<SetStateAction<Array<ISymbol>>>){
    let tempResults:Array<ISymbol> = [];
    if(content.length === 0){
        setResults([]);
        return;
    }
    let contentToSearch = content.toUpperCase();
    let leng = symbolsArray.length;
    for(let i=0;i<leng;i++){
        let symbolElement = symbolsArray[i];
        if(symbolElement.notation[0] === contentToSearch[0] || symbolElement.description[0] === contentToSearch[0]){
            if(symbolElement.notation.includes(contentToSearch) || symbolElement.description.includes(contentToSearch)){
                tempResults.push(symbolElement);
            }
        }
    }
    setResults(tempResults);
}

export function produceChartData(symbol:string,symbolData:IStockData):IChartData|any{
    if(symbolData.highest === undefined){
        return {};
    }
    const weekDays:Array<string> = ['Monday','Thursday','Wednesday','Tuesday','Friday'];
    let labels:Array<string> = [];
    for(let index:number = 0; index < symbolData.lowest.length; index++){
        labels.push(weekDays[index%5]);
    }
    let dataClose:IDatasetData = {label:'Average Prices',data:symbolData.close,fill:true,borderColor:'blue'};
    let dataHgh:IDatasetData = {label:'High Prices',data:symbolData.highest,fill:true,borderColor:'purple'};
    let dataLow:IDatasetData = {label:'Low Prices',data:symbolData.lowest,fill:true,borderColor:'red'};
    let title:IDatasetData = {label:symbol,data:[],fill:true,borderColor:'black',borderWidth:'12'};
    let chartData:IChartData = {labels:labels,datasets:[title,dataLow,dataClose,dataHgh]};
    return chartData;
}

export function mapSearchResults(data:Array<ISymbol>,setSymbolData:any){
    function createResultElement(symbol:ISymbol,index:number){
        return <div key={index} onClick={(e)=>{setSymbolData(symbol);}} style={getSearchResultStyle()}>{symbol.description}({symbol.notation})</div>;
    }
    return data.map(createResultElement);
}