import React from "react";

export default class UncontrolledLogin extends React.Component {
    
    handleUncontrolled = (event) => {
        event.preventDefault()

        let username = event.target.username.value
        let password = event.target.password.value
        let remember = event.target.remember.checked

        console.log({
            username,
            password,
            remember
        })
   
    }

    render() {
        return (
        <>
        <form onSubmit={this.handleUncontrolled}>
            <input name= 'username'></input>
            <input name='password' type="password"></input>
            <input name="remember" type="checkbox" ></input>

            <button type="submit">Login</button>
        </form>

        </>)
    }
}