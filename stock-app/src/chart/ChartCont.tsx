import React,{useState,useEffect} from 'react';
import {Chart} from './Chart';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {RetrieveSymbolData} from '../utility/ApiData';
import { Button } from '@material-ui/core';

export function ChartCont({symbol}:any){
    let [startDate,setStartDate]:any = useState(new Date());
    let [endDate,setEndDate]:any = useState(new Date());
    let [symbolData,setSymbolData]:any = useState({});
    useEffect(()=>{
        if(symbol !== undefined){
            RetrieveSymbolData(setSymbolData,symbol,startDate,endDate);
        }
    },[symbol,startDate,endDate]);
    let [tooltip,setTooltip] = useState(true);
    let [btnText,setBtnText] = useState('Disable');
    return (
        <div style={{left:'5%',position:'absolute',width:'90%',height:'80%',backgroundColor:'whitesmoke',borderRadius:'2%'}}>
            <div style={{marginLeft:'2%',marginTop:'0.5%',overflow:'auto'}}>
                <DatePicker selected={startDate} onChange={date =>{ setStartDate(date);}}></DatePicker>
                <DatePicker selected={endDate} onChange={date => {setEndDate(date);}}></DatePicker>
                <Button style={{marginLeft:'2%',backgroundColor:'dodgerblue'}} onClick={e=>{setTooltip(!tooltip);
                    if(btnText === 'Disable'){
                        setBtnText('Enable');
                    }else{
                        setBtnText('Disable');
                    }
                }}>{btnText}</Button>
            </div>
            <Chart symbolData={symbolData} tooltip={tooltip}/>
        </div>
    );
}