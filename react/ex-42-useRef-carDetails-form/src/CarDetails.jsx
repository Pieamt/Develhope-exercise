import React, { useEffect, useRef } from "react";
export function CarDetails({initialData}) {
   
    const inputRef = useRef()
    const modelInput = useRef()
    const yearInput = useRef()
    const colorInput = useRef()

    const handleChange = (e) => {
        e.preventDefault()
        console.log([modelInput.current.value, yearInput.current.value, colorInput.current.value])
    }

    useEffect(() => {inputRef.current.reset()}, [initialData])
    

    return (
        <>
        <p>Insert car details</p>
        <form ref={inputRef}>
        <input name='model' onChange={e => e.target.value} defaultValue={initialData.model} ref={modelInput}></input>
        <input name ='year' onChange={e => e.target.value} defaultValue={initialData.year} ref={yearInput}></input>
        <input name='color' onChange={e => e.target.value} defaultValue={initialData.color} ref={colorInput}></input>
        <button type="submit" onClick={handleChange}>Submit</button>
        </form>
        </>
    )
}