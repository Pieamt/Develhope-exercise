import React from "react";

export default class Counter extends React.Component {
    state = {
        counter : 0,
        date : new Date()
    }
    
    constructor (props) {
        super(props) 
        setInterval(() => {
            this.setState({
                counter: this.state.counter +1,
                date : new Date()
            })
        }, 1000);
    }

    render() {
        return <h1>Hi, this is my Counter: {this.state.counter} and this is the time: {this.state.date.toLocaleTimeString()}</h1>
    }
}