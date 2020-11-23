export interface IChartData{
    labels:Array<string>;
    datasets:Array<IDatasetData>;
}

export interface IDatasetData{
    label:string;
    data:Array<number>;
    fill:boolean;
    borderColor:string;
    borderWidth?:string;
}