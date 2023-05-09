import React from "react"

export default class ClickTracker extends React.Component{

    state = {
        registerButton: "no",
    }

    handleClick = (event) => {
        let tracking = event.target.name;
        this.setState({
            registerButton: tracking
        })
    }

    render(){
        return(
            <>
            <h1>You pressed {this.state.registerButton} button</h1>
            <button name="first" onClick={this.handleClick}>Click</button>
            <button name="second" onClick={this.handleClick}>Click</button>
            <button name="third" onClick={this.handleClick}>Click</button>
            </>
        )
    }
}