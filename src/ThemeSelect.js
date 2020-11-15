import React ,{useState,createContext} from 'react';

export const ThemeVar=createContext();


export const ThemeSelect =props=>{
    const [theme,setTheme]=useState('light');
    return <ThemeVar.Provider value= {[theme,setTheme]}  >{props.children} </ThemeVar.Provider>;
}