import React, { useEffect, useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0)
    
    useEffect( () => {
        let increment = setInterval(() => {
            setCounter((counter) => counter +1)
        }, 1000)
    
        return () => {
            clearInterval(increment)
            console.log('stop counter')
        }
    
    }, [])


        return <h1>Hi, this is my Counter: {counter} </h1>
}
