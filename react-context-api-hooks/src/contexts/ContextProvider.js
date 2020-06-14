import React, { createContext, useState } from 'react';

// create context, export context
export const Context = createContext()



// create provider - StudentsContextProvider
export const StudentsContextProvider = (props) => {

    const [students, setStudents] = useState([
        { name: "Aleem", class: "devops" },
        { name: "Zeeshan", class: "devops" },
        { name: "Hamza", class: "devops" }
    ]
    )

    return (
        <Context.Provider value={{ students }} >
            {props.children}
        </Context.Provider>
    );
}



// create provider - TeachersContextProvider
export const TeachersContextProvider = (props) => {

    const [teachers, setTeachers] = useState([
        { name: "Daniyal", class: "devops" },
        { name: "Ameen Alam", class: "devops" },
        { name: "Adil Altaf", class: "devops" }
    ]
    )

    return (
        <Context.Provider value={{ teachers }} >
            {props.children}
        </Context.Provider>
    );
}

