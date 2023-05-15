import React, { useEffect, useState } from "react";

export function GithubUser(props) {

    const [user, setUser] = useState();

    useEffect( () => {
        async function fetcher() {
            const response = await fetch(`https://api.github.com/users/${props.username}`)
            const data = await response.json();
            console.log(data)
            setUser(data.login)

        } fetcher()
    },[]);

    return <h2>{user ? user : 'Not a github user'}</h2>
}