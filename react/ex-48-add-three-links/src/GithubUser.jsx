import React, { useEffect, useState } from "react";

export default function GithubUser(props) {

    const [user, setUser] = useState();

    
    useEffect(() =>{
        fetch (`https://api.github.com/users/${props.username}`)
        .then(response =>{
            return response.json()
        })
        .then(json =>{
            console.log(json)

            setUser(json)
        })
    }, [props.username])

    return (
        <>
        {user &&
       ( <div>
        <p>{user.name}</p>
        <p>{user.login}</p>
        </div>)}
    </>)
}