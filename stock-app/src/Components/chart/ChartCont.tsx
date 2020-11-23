import React,{useState,useEffect} from 'react';
import {Chart} from './Chart';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {retrieveSymbolData} from '../../utility/ApiData';
import { Button } from '@material-ui/core';
import {IChartData} from '../../models/ChartDataInterfaces';
import {IStockData} from '../../models/StockDataInterfaces';
import {getChartContainerStyle,getChartContainerTopStyle,getTooltipButtonStyle,getProgressStyle} from '../../styles/ChartStyles';
import {getInitialStartDate,getInitialEndDate} from '../../utility/DefaultSetup';
import {CircularProgress} from '@material-ui/core';

export function ChartCont({symbol}:{symbol:string}){
    let [startDate,setStartDate] = useState<Date>(getInitialStartDate());
    let [endDate,setEndDate] = useState<Date>(getInitialEndDate());
    let [symbolData,setSymbolData] = useState<IStockData>({lowest:[],highest:[],close:[]});
    let [loading,setLoading] = useState<boolean>(true);
    const tooltipsOn:string = 'Disable Tooltips';
    const tooltipsOff:string = 'Enable Tooltips';
    useEffect(()=>{
        setLoading(true);
        retrieveSymbolData(setSymbolData,setLoading,symbol,startDate,endDate);
    },[symbol,startDate,endDate]);
    let [tooltip,setTooltip] = useState<boolean>(true);
    let [btnText,setBtnText] = useState<string>(tooltipsOn);
    let displayType = 'block';
    if(loading === true){
        displayType = 'block';
    }else{
        displayType = 'none';
    }
    return (
        <div style={getChartContainerStyle()}>
            <div style={getChartContainerTopStyle()}>
                <DatePicker selected={startDate} onChange={(date:Date) =>{ setStartDate(date);}}></DatePicker>
                <DatePicker selected={endDate} onChange={(date:Date) => {setEndDate(date);}}></DatePicker>
                <Button style={getTooltipButtonStyle()} onClick={e=>{setTooltip(!tooltip);
                    if(btnText === tooltipsOn){
                        setBtnText(tooltipsOff);
                    }else{
                        setBtnText(tooltipsOn);
                    }
                }}>{btnText}</Button>
                <CircularProgress style={getProgressStyle(displayType)} />
            </div>
            <Chart symbolData={symbolData} symbol={symbol} tooltip={tooltip} loadingOn={loading}/>
        </div>
    );
}