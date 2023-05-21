import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguages from "./DisplayLanguages"



export default function App() {

    const [language, setLanguage] = useState('en')

    function handleChangeLanguage(event) {
        setLanguage({language : event.target.value})    
    }

        return (
            <div>
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en">english</option>
                <option value="it">italiano</option>
            </select>
            <LanguageContext.Provider value={language}>
                <DisplayLanguages/>
            </LanguageContext.Provider>
            </div>
        )
}