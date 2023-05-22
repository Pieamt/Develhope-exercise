import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {

    const {data} = useGithubUser(username)

    return <div>
    {data && (
    <>
    <div>
    <h3>{data.name}</h3>
    <p>{data.login}</p>
    </div>
    </>
    )}
</div>
}
