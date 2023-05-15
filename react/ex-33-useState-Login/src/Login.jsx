import React from "react";

export default function Login(props) {
    const onLogin = (event) => {
        event.preventDefault();
        let memoValue = {
            name : props.text,
            password : props.password,
            remember : props.remember
        } 
        console.log(memoValue)
    }
        return <button disabled = {!props.text || !props.password} onClick={onLogin}>Login</button>
}
