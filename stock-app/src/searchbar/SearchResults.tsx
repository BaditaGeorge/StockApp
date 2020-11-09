
export default function CreateSearchResults(symbolsArray:Array<any>,content:string,setResults:any){
    let tempResults:Array<any> = [];
    if(content.length === 0){
        setResults([]);
        return;
    }
    let contentToSearch = content.toUpperCase();
    let leng = symbolsArray.length;
    for(let i=0;i<leng;i++){
        let symbolElement = symbolsArray[i];
        if(symbolElement.symbol[0] === contentToSearch[0] || symbolElement.description[0] === contentToSearch[0]){
            if(symbolElement.symbol.includes(contentToSearch) || symbolElement.description.includes(contentToSearch)){
                tempResults.push(symbolElement);
            }
        }
    }
    setResults(tempResults);
}