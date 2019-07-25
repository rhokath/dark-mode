import  useLocalStorage  from "./useLocalStorage";
import React,{ useEffect } from "react";

const useDarkMode= () => {
    const [darkMode, setDarkMode] = useLocalStorage("key");
    useEffect(()=>{
       darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
    },[darkMode]);
    return[darkMode, setDarkMode];

};

export default useDarkMode;