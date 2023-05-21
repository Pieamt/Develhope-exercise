import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";



export default function DisplayLanguages() {
  const language = useContext(LanguageContext)

  const sayHello = {
    en: {
      'SAY_HELLO': "hello world",
    },
    it: {
      'SAY_HELLO': "ciao mondo",
    },
  };

    return (
      <>
         <h1>{sayHello[language]['SAY_HELLO']}</h1>
      </>
    );
}
