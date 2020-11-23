import {useState} from 'react';
import {setSourceMapRange } from 'typescript';
import {ISymbol,IStockData} from '../models/StockDataInterfaces';

export function retrieveApiData(setSymbols:any){
    async function retrieveData(){
        const url:string = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bukfm8n48v6s9fns403g';
        let resp:any = await fetch(url);
        let data:any = await resp.json();
        let symbolObjects:Array<ISymbol> = [];
        for(let i:number = 0; i < data.length; i++){
            symbolObjects.push({notation:data[i].symbol,description:data[i].description});
        }
        setSymbols(symbolObjects);
    }
    retrieveData();
}

export function retrieveSymbolData(setSymbolData:any,setLoading:any,symbol:string,startDate:any,endDate:any){
    async function retrieveSymbolData(){
        startDate = Math.floor(startDate.getTime()/1000);
        endDate = Math.floor(endDate.getTime()/1000);
        const url:string = `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${startDate}&to=${endDate}&token=bukfm8n48v6s9fns403g`;
        let resp = await fetch(url);
        let data = await resp.json();
        let symbolData:IStockData = {lowest:[],highest:[],close:[]};
        symbolData.lowest = data.l;
        symbolData.highest = data.h;
        if(data.l !== undefined){
            for(let i=0;i<data.l.length;i++){
                symbolData.close.push((data.l[i]+data.h[i])/2);
            }
        }
        setLoading(false);
        setSymbolData(symbolData);
    }
    retrieveSymbolData();
}