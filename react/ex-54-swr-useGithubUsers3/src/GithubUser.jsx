import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {

    const {data , onRefresh} = useGithubUser(username)

    return <div>
    <button onClick={onRefresh}>refresh</button>
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
