import React,{useEffect, useRef, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {ChartData,DatasetData} from './DataInterfaces';

function produceChartData(symbolData:any):ChartData|any{
    if(symbolData.hgh === undefined){
        return {};
    }
    const weekDays:Array<string> = ['Monday','Thursday','Wednesday','Tuesday','Friday'];
    let labels:Array<string> = [];
    for(let index:number = 0; index < symbolData.low.length; index++){
        labels.push(weekDays[index%5]);
    }
    let dataCurr:DatasetData = {label:'Average Prices',data:symbolData.curr,fill:true,borderColor:'blue'};
    let dataHgh:DatasetData = {label:'High Prices',data:symbolData.hgh,fill:true,borderColor:'purple'};
    let dataLow:DatasetData = {label:'Low Prices',data:symbolData.low,fill:true,borderColor:'red'};
    let chartData:ChartData = {labels:labels,datasets:[dataLow,dataCurr,dataHgh]};
    return chartData;
}

export function Chart({symbolData,tooltip}:any){
    let chrt:any = useRef(null);
    let [data,setData]:any = useState({});
    useEffect(()=>{
        setData(produceChartData(symbolData));
    },[symbolData]);
    return (
        <div ref={chrt} style={{position:'absolute',left:'5%',top:'10%',width:'90%',height:'85%',backgroundColor:'white',borderTopRightRadius:'2.5%',borderBottomLeftRadius:'2.5%'}}>
            <Line data={data} options={{maintainAspectRatio:false,tooltips:{enabled:tooltip}}}/>
        </div>
    );   
}