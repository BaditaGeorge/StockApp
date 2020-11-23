import { IChartData } from '../models/ChartDataInterfaces';


export function getInitialStartDate():Date{
    const days:number = 7;
    return new Date(new Date().getTime() - (days*24*60*60*1000));
}

export function getInitialEndDate():Date{
    return new Date();
}