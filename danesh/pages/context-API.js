import { useState } from "react";
import { createContext } from "react";

// create context api 
export const mycontext=createContext();


// function context api 
const MycontextProvider=({children})=>{
    
    // state context api 
    const [uploadfile,setuploadfile]=useState("hhhh");

    // object context api 
    const objcontext={uploadfile,setuploadfile}



    return(
        <mycontext.Provider value={objcontext}>
                {children}
        </mycontext.Provider>
    );
}


export default MycontextProvider;