import React from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguages from "./DisplayLanguages"



export default class App extends React.Component {
    
    state = {
        language : "en",

    }

     handleChangeLanguage = (event) => {
         this.setState = {
            language : event.target.value
         }
    }

    render() {
        return (
            <div>
            <select value={this.state.language} onChange={this.handleChangeLanguage}>
                <option value="en">english</option>
                <option value="it">italiano</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
                <DisplayLanguages/>
            </LanguageContext.Provider>
            </div>
        )
    }
}