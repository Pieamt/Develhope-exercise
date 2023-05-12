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

    OnReset = () => {
        let deleteValue = {
        name : '' ,
        password : ''
        }
        console.log(deleteValue)
    }

    render() {
        return (
        <>
        <button disabled = {!this.props.text || !this.props.password} onClick={this.OnLogin}>Login</button>
        <button disabled = {!this.props.text || !this.props.password} onClick={this.OnReset}>Reset</button>
        </>)
    }
}