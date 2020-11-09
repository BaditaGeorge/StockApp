import React,{useRef,useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {RetrieveApiData} from '../utility/ApiData';
import CreateSearchResults from './SearchResults';
import { createImportSpecifier } from 'typescript';


export function Search({setSymbolData}:any){
    let [symbols,setSymbols] = useState([]);
    let [searchContent,setSearchContent] = useState('');
    let [searchResults,setSearchResults]:any = useState([]);
    useEffect(()=>{
        RetrieveApiData(setSymbols);
    },[]);
    useEffect(()=>{
        CreateSearchResults(symbols,searchContent,setSearchResults);
    },[searchContent]);
    let whenFocus = (e:any):void=>{
        setIsFocused(true);
    };
    let whenBlur = (e:any):void=>{
        setTimeout(()=>{
            setIsFocused(false);
        },150);
        
    };
    let searchKeyUp = (e:any):void=>{
        setSearchContent(e.target.value);
    };
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let [isFocused,setIsFocused] = useState(false);
    let cont = <div style={{backgroundColor:'wheat',width:'35%',overflowY:'scroll',height:'100px',marginTop:'0%',borderBottomLeftRadius:'8%',borderBottomRightRadius:'8%'}}>{searchResults.map((el:any,i:number) => <div key={i} onClick={(e)=>{setSymbolData(el);}} style={{textAlign:'center',cursor:'pointer',userSelect:'none'}}>{el.description}({el.symbol})</div>)}</div>
    if(isFocused === true){
        return (
            <div>
                <div style={{marginLeft:'40%',marginTop:'1%'}}>
                    <TextField onFocus={whenFocus} onBlur={whenBlur} onKeyUp={searchKeyUp} style={{width:'35%',height:'10%'}} label='Search' type='search' variant='outlined'/> 
                    {cont}
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <div style={{marginLeft:'40%',marginTop:'1%'}}>
                    <TextField onFocus={whenFocus} onBlur={whenBlur} style={{width:'35%',height:'10%'}} label='Search' type='search' variant='outlined'/>
                </div>
            </div>
        )
    }
}