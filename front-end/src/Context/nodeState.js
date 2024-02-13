import React from "react";
import NoteContext from "./nodeContext";
const NoteState=(props)=>{
const state={"name":"karma"
"class":"xc"}
    return(
<NoteContext.Provider value={state}>
    {props.children}
</NoteContext.Provider>)

}
export default NoteState;