import React from 'react'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className="bg-light" >
            <div className="container" >
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <img className="logo" src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/lifecycle">LifeCycle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/component-state">Component State</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}


export default Header;