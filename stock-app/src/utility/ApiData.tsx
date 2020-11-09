import {useState} from 'react';
import { setSourceMapRange } from 'typescript';

export function RetrieveApiData(setSymbols:any){
    async function retrieveData(){
        const url:string = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bukfm8n48v6s9fns403g';
        let resp = await fetch(url);
        let data = await resp.json();
        let symbolObjects:Array<any> = [];
        for(let i:number = 0; i < data.length; i++){
            symbolObjects.push({symbol:data[i].symbol,description:data[i].description});
        }
        setSymbols(symbolObjects);
    }
    retrieveData();
}

export function RetrieveSymbolData(setSymbolData:any,symbol:string,startDate:any,endDate:any){
    async function retrieveSymbolData(){
        startDate = Math.floor(startDate.getTime()/1000);
        endDate = Math.floor(endDate.getTime()/1000);
        const url:string = `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${startDate}&to=${endDate}&token=bukfm8n48v6s9fns403g`;
        let resp = await fetch(url);
        let data = await resp.json();
        let symbolData:any = {};
        symbolData.low = data.l;
        symbolData.hgh = data.h;
        symbolData.curr = [];
        if(data.l !== undefined){
            for(let i=0;i<data.l.length;i++){
                symbolData.curr.push((data.l[i]+data.h[i])/2);
            }
        }
        setSymbolData(symbolData);
    }
    retrieveSymbolData();
}