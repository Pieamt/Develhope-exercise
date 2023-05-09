import React from "react";
import Login from "./Login";

export default class Input extends React.Component {

    state = {
        username : '',
        password : ''
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        })

    }


    render() {
        return (
            <>
            <input name="username"  value={this.state.username} onChange={this.handleInputChange}/>
            <input name="password"  type="password" value={this.state.password} onChange={this.handleInputChange}/>
            <Login text={this.state.username} password={this.state.password}/>
            </>
        )
    }
}