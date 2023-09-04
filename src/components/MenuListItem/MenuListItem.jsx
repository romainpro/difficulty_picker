import { useState } from "react";
import s from "./style.module.css"

export function MenuListItem({onClick,difficulty,isSelected}){
    const [isHovered,setIsHovered]=useState(false)
    
    function getBackgroudColor(){
        if (isHovered ){
            return "#a5e9ff"
        }else if (isSelected){
            return "#26baea"
        }else{
            return "#eff0ef"
        }
    };
    return(
    <div 
    onClick ={()=>onClick(difficulty)}
    style={{backgroundColor:getBackgroudColor()}} 
    className={s.container} 
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
        set difficulty :{difficulty}
    </div>
    );
}