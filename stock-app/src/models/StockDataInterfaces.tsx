export interface ISymbol{
    notation:string;
    description:string;
}

export interface IStockData{
    lowest:Array<number>;
    highest:Array<number>;
    close:Array<number>;
}