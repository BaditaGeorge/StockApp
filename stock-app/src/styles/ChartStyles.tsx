export function getChartContainerStyle():{}{
    return {left:'5%',position:'absolute',width:'90%',height:'80%',backgroundColor:'whitesmoke',borderRadius:'2%'};
}

export function getChartContainerTopStyle():{}{
    return {marginLeft:'2%',marginTop:'0.5%',overflow:'auto',display:'flex'};
}

export function getTooltipButtonStyle():{}{
    return {marginLeft:'2%',backgroundColor:'dodgerblue',width:'100',height:'36'};
}

export function getChartStyle(opacity:number):{}{
    return {position:'absolute',
    left:'5%',
    top:'10%',
    width:'90%',
    height:'85%',
    backgroundColor:'white',
    borderTopRightRadius:'2.5%',
    borderBottomLeftRadius:'2.5%',
    opacity:opacity};
}

export function getProgressStyle(displayType:string):{}{
    return {position:'absolute',left:'50%',top:'50%',zIndex:1,display:displayType};
}