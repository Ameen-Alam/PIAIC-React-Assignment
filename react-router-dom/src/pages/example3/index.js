import React from 'react'
import { useParams } from "react-router-dom";


const Example3 = () => {

    const { slug } = useParams();
    return (
        <div>
            <h1>react-router-hook/useParams</h1>
            Param {slug}
        </div>
    )
}

export default Example3;