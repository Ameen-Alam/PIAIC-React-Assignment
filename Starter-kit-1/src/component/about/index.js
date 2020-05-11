import React from 'react'
import ameenalam from '../../assets/images/ameenalam.jpg'

const About = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../../assets/images/Banner/4.jpg")} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" >
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">About</li>
                    </ol>
                </nav>
            </div>
            <div className="container my-5" >
                <p>Here will use fetch API using AXIOS</p>
                <div className="row" >
                    <div className="my-2 col-md-2" >
                        <div className="p-4 bg-light border" >
                            <img className="ameenalam" src={ameenalam} alt="ameen alam" />
                        </div>
                    </div>
                    <div className="my-2 col-md-6" >
                        <div className="p-4 bg-light border" >
                            col-md-4
              </div>
                    </div>
                    <div className="my-2 col-md-4" >
                        <div className="p-4 bg-light border" >
                            col-md-4
              </div>
                    </div>
                    <div className="my-2 col-md-6" >
                        <div className="p-4 bg-light border" >
                            col-md-6
              </div>
                    </div>
                    <div className="my-2 col-md-6" >
                        <div className="p-4 bg-light border" >
                            col-md-6
              </div>
                    </div>
                    <div className="my-2 col-md-8" >
                        <div className="p-4 bg-light border" >
                            col-md-8
              </div>
                    </div>
                    <div className="my-2 col-md-4" >
                        <div className="p-4 bg-light border" >
                            col-md-4
              </div>
                    </div>
                    <div className="my-2 col-md-2" >
                        <div className="p-4 bg-light border" >
                            col-md-2
              </div>
                    </div>
                    <div className="my-2 col-md-2" >
                        <div className="p-4 bg-light border" >
                            col-md-2
              </div>
                    </div>
                    <div className="my-2 col-md-2" >
                        <div className="p-4 bg-light border" >
                            col-md-2
              </div>
                    </div>
                    <div className="my-2 col-md-2" >
                        <div className="p-4 bg-light border" >
                            col-md-2
              </div>
                    </div>
                    <div className="my-2 col-md-2" >
                        <div className="p-4 bg-light border" >
                            col-md-2
              </div>
                    </div>
                    <div className="my-2 col-md-2" >
                        <div className="p-4 bg-light border" >
                            col-md-2
              </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;