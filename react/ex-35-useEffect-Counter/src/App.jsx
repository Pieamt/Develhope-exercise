import React, { useState } from "react";
import {Counter} from "./Counter";

export function App() {

    const [showCounter, setShowCounter] = useState(true)

    function handleRemoveCounter() {
        setShowCounter(s => !s)
    }


    return (
        <div>
            {showCounter ?( <Counter />) : false}
            <button onClick={handleRemoveCounter}>Remove counter</button>
        </div>
    )
}