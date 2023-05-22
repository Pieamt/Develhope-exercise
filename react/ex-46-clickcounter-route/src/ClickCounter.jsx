import React, { useState } from "react";

export default function ClickCounter() {
   
    const [count, setCount] = useState(0)

    const incrementClick = () => {
        const increment = count + 1
        setCount(increment)
    }

       return (
        <>
        <h1>my increment counter : {count}</h1>
        <button onClick={incrementClick}>Click</button>
        </>
       )
}