import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="users">
          <Route path="list" element={<GithubUserList />}>
            <Route path=":usernamw" element={<ShowGithubUser />} />
          </Route>
        </Route>
        <Route path="*" element={<p>not found</p>} />
      </Routes>
      <p>
        <Link to="users/pieamt">My user</Link>
      </p>
      <p>
        <Link to="users/andgelorea">Andrea user</Link>
      </p>
      <p>
        <Link to="users/maurilio224">Maurilio user</Link>
      </p>
    </>
  );
}
