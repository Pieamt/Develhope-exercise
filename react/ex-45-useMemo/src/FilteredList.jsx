import React, { useMemo } from "react";

export function FilteredList() {

    let personData = [
        {
            'name' : 'Antonio',
            'id' : 1,
            'age' : 25
        },

        {
            'name' : 'Giovanni',
            'id' : 2,
            'age' : 17
        },

        {
            'name' : 'Giusy',
            'id' : 3,
            'age' : 23
        },

        {
            'name' : 'Maria',
            'id' : 4,
            'age' : 19
        },

        {
            'name' : 'Giuseppe',
            'id' : 5,
            'age' : 16
        },

        {
            'name' : 'Simone',
            'id' : 6,
            'age' : 22
        }
    ];

    const memoPersonData = useMemo(() => personData.filter(e => e.age > 17), [personData] )

    return (
        <>
         {memoPersonData.map((newArr) => 
           <div>
            <li>
                <h3>Name : {newArr.name}</h3>
                <h4>Id : {newArr.id}, Age : {newArr.age}</h4>
            </li>
           </div>  
         )}
        </>
    )
}