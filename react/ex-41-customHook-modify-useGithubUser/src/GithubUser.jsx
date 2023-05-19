import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {

    const {user ,loading, error, onFetch} = useGithubUser(username)

    function handleData()  {
        onFetch(username)
    }

    return (
        <div>
          <button onClick={handleData}>Load user data</button>
          {user && (
            <>
              <div>
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error</h1>}
                <h1>{user.name}</h1>
                <p>{user.login}</p>
              </div>
            </>
          )}
        </div>
      );
    }
