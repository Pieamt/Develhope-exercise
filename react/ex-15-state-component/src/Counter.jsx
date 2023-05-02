import React from "react";

export default class Counter extends React.Component {
    state = {
        counter : this.props.initialValue
    }
    
    constructor (props) {
        super(props) 
        setInterval(() => {
            this.setState({
                counter: this.state.counter + this.props.incrementAmount
            })
        }, this.props.intervall);
    }

    render() {
        return <h1>Hi, this is my Counter: {this.state.counter}</h1>
    }
}
