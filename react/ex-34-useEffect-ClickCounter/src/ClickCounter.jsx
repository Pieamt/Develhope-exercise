import React, { useEffect } from "react";

export default function ClickCounter(props) {
   
   useEffect(() => props.change, [props.count])

       return (
        <>
        <h1>my increment counter : {props.count}</h1>
        <button onClick={props.increment}>Click</button>
        </>
       )
}