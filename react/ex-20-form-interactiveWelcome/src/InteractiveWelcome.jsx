import React, { useState } from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component {
    state = {
        input : ''
    }
    
    handleInteractive = (event) => {
        const name = event.target.value
        this.setState({
            input : name
        })
    }

    render() {
        return (
            <>
            <Welcome name= {this.state.input}/>
            <input onChange={this.handleInteractive} />
            </>
        )
    }

}