import React from "react";
import { CarDetails } from "./CarDetails";
export function App() {

    const initialData = {
        model : 'Alfa Romeo Giulia',
        year : '2022',
        color : 'Red'
    }

    return <CarDetails initialData={initialData} />
}