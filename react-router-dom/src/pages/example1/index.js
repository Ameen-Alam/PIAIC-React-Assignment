import React from 'react'
import { useHistory } from "react-router-dom";


const Example1 = () => {

    let history = useHistory()

    const handleClick = () => {
        history.push("/");
    }

    return (
        <div>
            <h1>react-router-hook/use-history</h1>
            <button onClick={handleClick}>GO Back</button>
        </div>
    )
}

export default Example1;