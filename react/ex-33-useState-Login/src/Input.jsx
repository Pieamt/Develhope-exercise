import React, { useState } from "react";
import Login from "./Login";

export default function Input() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, setCheckbox] = useState(false)

    const handleInputChange = (event) => {
        setUsername({name : event.target.value})
    }

    const handleInputChange2 = (event) => {
        setPassword({password : event.target.value})
    }

    const handleInputChange3 = (event) => {
        setCheckbox({checkbox : event.target.checked})
    }

        return (
            <>
            <input  onChange={handleInputChange}/>
            <input type="password"  onChange={handleInputChange2}/>
            <input type="checkbox"  onChange={handleInputChange3}/>
            <Login text={username} password={password} remember={checkbox}/>
            </>
        )
    }
