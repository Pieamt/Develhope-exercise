import { useEffect, useState } from "react";

export function useGithubUser() {
    const [user, setUser] = useState('');
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    
        async function fetcher(username) {
            setLoading(true);
            setError(null)

            try {
                const response = await fetch(`https://api.github.com/users/${username}`)
                const data = await response.json()
                
                if (response.status !== 200) {
                    setError(new Error())
                }
                setUser(data)
                
            } catch (error) {
                setError(error)
                setUser(null)
            } finally {
                setLoading(false)
            }

        } 
   
    return {onFetch : fetcher, user, error, loading}
}