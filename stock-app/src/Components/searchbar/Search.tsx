import React,{useRef,useState,useEffect, Dispatch, SetStateAction} from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {retrieveApiData} from '../../utility/ApiData';
import {createSearchResults,mapSearchResults} from '../../utility/ProcessData';
import { createImportSpecifier } from 'typescript';
import {ISymbol} from '../../models/StockDataInterfaces';
import {getSearchResultsContainerStyle,getTextFieldContainerStyle,getTextFieldStyle} from '../../styles/SearchStyle';


export function Search({setSymbolData}:{setSymbolData:Dispatch<SetStateAction<ISymbol>>}){
    let [symbols,setSymbols] = useState<Array<ISymbol>>([]);
    let [searchContent,setSearchContent] = useState<string>('');
    let [searchResults,setSearchResults] = useState<Array<ISymbol>>([]);
    useEffect(()=>{
        retrieveApiData(setSymbols);
    },[]);
    useEffect(()=>{
        createSearchResults(symbols,searchContent,setSearchResults);
    },[searchContent]); 
    let whenFocus = ():void=>{
        setIsFocused(true);
    };
    let whenBlur = ():void=>{
        setTimeout(()=>{
            setIsFocused(false);
        },150);
        
    };
    let searchKeyUp = (e:any):void=>{
        setSearchContent(e.target.value);
    };
    let [isFocused,setIsFocused] = useState(false);
    let cont = <div style={getSearchResultsContainerStyle()}>{mapSearchResults(searchResults,setSymbolData)}</div>;
    if(isFocused === true){
        return (
            <div>
                <div style={getTextFieldContainerStyle()}>
                    <TextField onFocus={whenFocus} onBlur={whenBlur} onKeyUp={searchKeyUp} style={getTextFieldStyle()} label='Search' type='search' variant='outlined'/> 
                    {cont}
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <div style={getTextFieldContainerStyle()}>
                    <TextField onFocus={whenFocus} onBlur={whenBlur} style={getTextFieldStyle()} label='Search' type='search' variant='outlined'/>
                </div>
            </div>
        )
    }
}