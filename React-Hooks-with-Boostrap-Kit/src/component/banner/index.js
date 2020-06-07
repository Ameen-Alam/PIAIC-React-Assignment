import React from 'react'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" >
            <ol className="carousel-indicators">
                <li className="active"></li>
                <li ></li>
                <li ></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require("../../assets/images/Banner/2.jpg")} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={require("../../assets/images/Banner/3.jpg")} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={require("../../assets/images/Banner/1.jpg")} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" ></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" ></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}


export default Banner;