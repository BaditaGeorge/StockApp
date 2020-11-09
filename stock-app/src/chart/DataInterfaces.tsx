export interface ChartData{
    labels:Array<string>;
    datasets:Array<DatasetData>;
}

export interface DatasetData{
    label:string;
    data:Array<number>;
    fill:boolean;
    borderColor:string;
}