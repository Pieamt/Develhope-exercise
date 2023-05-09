import React from "react";

export default class ClickCounter extends React.Component {
   
    state = {
        count: 0
    }

    incrementClick = e => {
        this.setState({
            count : this.state.count + 1
        })
    }
    
    render() {
       return (
        <>
        <h1>my increment counter : {this.state.count}</h1>
        <button onClick={this.incrementClick}>Click</button>
        </>
       )
    }
}