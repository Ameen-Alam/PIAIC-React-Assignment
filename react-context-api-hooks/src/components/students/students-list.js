import React, { useContext } from 'react'

// import context
import { Context } from '../../contexts/ContextProvider'


const StudentsList = () => {
    // use context
    const { students } = useContext(Context)
    console.log(students, "students")
    return (
        <div>
            <h1>Students List</h1>
            <ul>
                {students.map((val, key) => (
                    <li key={key} >{val.name} {val.class}</li>
                ))}
            </ul>
        </div>
    )
}

export default StudentsList;