import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty.jsx";
import { MenuListe } from "./components/MenuList/MenuList.jsx";

export function App(){
    const [currentDifficulty,setCurrentDifficulty] = useState("");

    function updateDifficulty(difficulty){
        setCurrentDifficulty(difficulty);
    }
    return<div>
       <MenuListe onItemClick={updateDifficulty} difficulty={currentDifficulty}/>
        {<DisplayDifficulty difficulty={currentDifficulty} />}
    </div>;
}