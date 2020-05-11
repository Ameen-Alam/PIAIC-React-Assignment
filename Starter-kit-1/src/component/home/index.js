import React, { Fragment } from 'react'
import Banner from '../banner'
import Card from './Card'

const Home = () => {
    return (
        <Fragment>
            <Banner />
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">Home</li>
                </ol>
            </nav>
            <Card />
        </Fragment>
    )
}


export default Home;