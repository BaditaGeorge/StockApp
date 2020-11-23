import React,{useEffect, useRef, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {IChartData,IDatasetData} from '../../models/ChartDataInterfaces';
import {IStockData,ISymbol} from '../../models/StockDataInterfaces';
import {getChartStyle} from '../../styles/ChartStyles';
import {produceChartData} from '../../utility/ProcessData';

export function Chart({symbolData,tooltip,symbol,loadingOn}:{symbolData:IStockData,tooltip:boolean,symbol:string,loadingOn:boolean}){
    let [data,setData] = useState<IChartData|{}>({});
    let [opacity,setOpacity] = useState<number>(0.5);
    useEffect(()=>{
        setData(produceChartData(symbol,symbolData));
    },[symbolData]);
    useEffect(()=>{
        if(loadingOn === true){
            setOpacity(0.5);
        }else{
            setOpacity(1.0);
        }
    },[loadingOn]);
    return (
        <div style={getChartStyle(opacity)}>
            <Line data={data} options={{maintainAspectRatio:false,tooltips:{enabled:tooltip}}}/>
        </div>
    );   
}