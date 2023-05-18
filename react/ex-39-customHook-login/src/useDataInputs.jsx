import { useState } from "react";

export function useDataInputs() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (event) => {
        event.preventDefault()
        let memoInputs = {
            name : username,
            password: password
        }
        console.log(memoInputs)
    }

    const completeUser = (e) => {
        setUsername({username : e.target.value})
    }

    const completePass = (e) => {
        setPassword({password : e.target.value})
    }

    return {
        onLogin : onLogin,
        onUser : completeUser,
        onPass : completePass
    }


}