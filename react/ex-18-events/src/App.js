import React from "react";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return <Counter  initialValue = {0} incrementAmount = {1} intervall = {1000}/>
  }
}

export default App;
