import React from "react";

export default class Login extends React.Component {
    OnLogin = (event) => {
        event.preventDefault();
        let memoValue = {
            name : this.props.text,
            password : this.props.password
        } 
        console.log(memoValue)
    }
    render() {
        return <button disabled = {!this.props.text || !this.props.password} onClick={this.OnLogin}>Login</button>
    }
}