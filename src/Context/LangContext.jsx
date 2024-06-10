import React, { createContext, useState } from "react";


export const langContext = createContext();

export default function LangContextProvider(props) {
    const [Lang, setLang] = useState("Ar")

    
    return <>
    
        <langContext.Provider value={{ Lang , setLang }}>
                {props.children}
        </langContext.Provider>
    </>
}