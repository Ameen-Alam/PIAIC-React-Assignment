import React, { useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";

const Example2 = () => {

    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const searchParams = new URLSearchParams(location.search);
        console.log(location, "location")
        console.log(currentPath, "currentPath")
        console.log(searchParams, "searchParams")
    }, [location]);

    const history = useHistory()
    const handleClick = () => {
        history.push('use-location:slug')
    }

    return (
        <div>
            <h1>react-router-hook/useLocation</h1>
            <button onClick={handleClick}>UseParams</button>
        </div>
    )
}

export default Example2;