import React, { Component, Fragment } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = {
            val: "Ameen",
            ss: 'Ameen'
        }
    }

    clickIt = () => {
        this.setState({ val: "Sir Ameen Alam" })
        console.log("update State")
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, state, " getDrivedStateFromProps")
        return { ss: props.val }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot, "componentDidUpdate")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState, "shouldComponentUpdate")
        return { ss: "abcdef" }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState, "getSnapshotBeforeUpdate")
        return { ss: "abcde" }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    componentDidCatch(error, info) {
        console.log(error, info, "componentDidCatch")
    }
    static getDerivedStateFromError(error) {
        console.log(error, " error")
    }
    render() {
        console.log("render")
        return (
            <Fragment>
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
                            <li className="breadcrumb-item active">LifeCycle</li>
                        </ol>
                    </nav>
                    <div className="height1" >
                        <div>
                            <h1>React LifeCycle</h1>
                            <button onClick={this.clickIt}>update state</button>
                            <p>{this.state.ss}</p>
                            <p>{this.state.val}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

}

LifeCycle.defaultProps = {
    val: "Ameen Alam"
}