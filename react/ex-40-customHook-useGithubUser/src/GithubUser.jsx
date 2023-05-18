import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}) {

    const {user} = useGithubUser(username)

    return <h2>{{username} ? user : 'loading'}</h2>
}