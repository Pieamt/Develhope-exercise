import React from "react";
import TodoList from "./TodoList"


export default function App() {
    const renderrArr = (arr, remove) => {
        return arr.map((item, index) => {
        return (
            <> 
            <li index={index}>{item}</li> 
            <button onClick={() => remove(index)}>delete</button>
            </>
            )})
    } 
     return <TodoList render={renderrArr}/>
}