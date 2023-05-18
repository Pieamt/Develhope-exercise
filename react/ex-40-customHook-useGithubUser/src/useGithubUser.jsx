import { useEffect, useState } from "react";

export function useGithubUser(username) {
    const [user, setUser] = useState('');

    useEffect( () => {
        async function fetcher() {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json();
            console.log(data)
            setUser(data.name)

        } fetcher()
    },[]);

    return {user : user}
}