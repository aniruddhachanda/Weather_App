const { createContext, useState, useEffect } = require("react");

const theamContext=createContext()
const THEAM_KEY='theam';

function TheamProvider({children}){

    const [dark,setDark]=useState(true);

    const saveThemeToLocalStorage =(theme)=>{
        localStorage.setItem(THEAM_KEY,JSON.stringify(theme));
    }

    useEffect(()=>{
        const savedTheam=JSON.parse(localStorage.getItem(THEAM_KEY));
        if(savedTheam!==null){
            setDark(savedTheam);
            return;
        }

        const isSystemTheamDark=window.matchMedia('(prefers-color-scheme: dark)').matches;

        setDark(isSystemTheamDark===true);

        console.log(isSystemTheamDark);
    },[]);


    return (
        <theamContext.Provider value={{dark,setDark,saveThemeToLocalStorage}}>
            {children}
        </theamContext.Provider>
    )
}

export {TheamProvider};
export default theamContext;