import React, { useState } from "react";
import ClickCounter from "./ClickCounter";

export function App() {
    const [count, setCount] = useState(0)

    const OnCounterChange = () => {
        console.log(`the value is now: ${count}`)
    }

    const incrementClick = () => {
        const increment = count + 1
        setCount(increment)
    }

    return <ClickCounter increment={incrementClick} count={count} change={OnCounterChange({count})} />
}