import React from "react";
import { useCounter } from "./useCounter";

export function Counter() {
    const { Counter, onIncrement, onDecrement, onReset } = useCounter()

        return (
        <>
        <h1>Counter: {Counter} </h1>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
        <button onClick={onReset}>reset</button>
        </>
        )
}
