import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
    const [name, setName] = useState('');
    const [items, setItems] = useState([]);
    const handleAdd = () => {
        setItems([...items, name]);
    };

    return(
        <div>
        <input onChange={(event) => setName(event.target.value)}/>
          <button onClick={handleAdd}>Add List</button>
          {items.map((name, index) =>{return <li index={index}><Link to={name}>{name}</Link></li>})}
          <Outlet/>
        </div>
    )

}