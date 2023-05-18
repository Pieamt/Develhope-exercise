import React from "react";
import { useDataInputs } from "./useDataInputs";

export function App() {

    const { onLogin , onUser , onPass } = useDataInputs()

    return (
        <>
        <form>
            <input onChange={onUser}></input>
            <input type="password" onChange={onPass}></input>
            <button onClick={onLogin} type="submit">Login</button>
        </form>
        </>
    )
}