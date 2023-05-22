import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

export default function App() {
    return (
        <>
        <Routes>
            <Route path="users/:username" element={<ShowGithubUser/>} />
        </Routes>
        <p><Link to='users/pieamt'>My user</Link></p>
        <p><Link to='users/andgelorea'>Andrea user</Link></p>
        <p><Link to='users/maurilio224'>Maurilio user</Link></p>
        </>
    )
}