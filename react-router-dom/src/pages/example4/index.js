import React from 'react'
import { useRouteMatch } from "react-router-dom";


const Example4 = () => {

    const match = useRouteMatch('/react-router-hook/use-route-match ');

    return match ? <p>{match.params.name}'s Profile</p> : <p>My own profile</p>;
  
}

export default Example4;