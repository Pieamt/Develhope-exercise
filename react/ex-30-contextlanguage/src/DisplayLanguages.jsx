import React from "react";
import { LanguageContext } from "./LanguageContext";

const SayHello = {
  en: {
    SAY_HELLO: "hello world",
  },
  it: {
    SAY_HELLO: "ciao mondo",
  },
};

export default class DisplayLanguages extends React.Component {
  render() {
    return (
      <>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <div>
                <h1>{SayHello[language].SAY_HELLO}</h1>
              </div>
            )
          }}
        </LanguageContext.Consumer>
      </>
    );
  }
}
