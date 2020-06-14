import React, { useContext } from 'react'

// import context
import { Context } from '../../contexts/ContextProvider'


const TeachersList = () => {
    // use context
    const { teachers } = useContext(Context)
    console.log(teachers, "teachers")
    return (
        <div>
            <h1>Teachers List</h1>
            <ul>
                {teachers.map((val, key) => (
                    <li key={key} >{val.name} {val.class}</li>
                ))}
            </ul>
        </div>
    )
}

export default TeachersList;