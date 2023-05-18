import React from "react";
import CounterDisplay from "./CounterDisplay";

export default class Counter extends React.Component {
    state = {
        counter : this.props.initialValue
    }
    
    // constructor (props) {   (the constructor is not required)
    //     super(props) 
    // }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: this.state.counter + this.props.incrementAmount
            })
        }, this.props.intervall);
    }

    render() {
        return <CounterDisplay count = {this.state.counter}/>
    }
}
