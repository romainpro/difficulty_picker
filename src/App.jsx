import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty.jsx";
import { MenuListe } from "./components/MenuList/MenuList.jsx";
import s from "./style.module.css";

export function App(){
    const [currentDifficulty,setCurrentDifficulty] = useState("");

    function updateDifficulty(difficulty){
        setCurrentDifficulty(difficulty);
    }
    return<div>
        <h1 className={s.title}>Select your React difficulty</h1>
        <div className={s.workspace}>
       <MenuListe onItemClick={updateDifficulty} difficulty={currentDifficulty}/>
        <DisplayDifficulty difficulty={currentDifficulty} />
        </div>
    </div>;
}