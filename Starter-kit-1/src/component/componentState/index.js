import React, { Component, Fragment } from 'react'
import Child from './Child'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            todo: []
        }

        console.log("constructor")
    }
    ClickIt = (e) => {
        e.preventDefault()
        let todo = this.state.todo
        let input = this.state.name
        input !== "" && todo.push(input)
        this.setState({
            todo: todo,
            name: ""
        })
    }

    changeHandler = (event) => {

        this.setState({
            name: event.target.value
        })
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    delete = (id) => {
        console.log(id, "delete")
        let todo = this.state.todo
        todo.splice(id, 1)
        this.setState({
            todo
        })
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
                            <li className="breadcrumb-item active">Component State</li>
                        </ol>
                    </nav>
                    <h1 className="text-center" >Todo App With Components State</h1>
                    <div className="height1" >
                        <div>
                            <form onSubmit={this.ClickIt} >
                                <input type="text input" value={this.state.name} onChange={this.changeHandler} />
                                <button className="btn btn-primary" >Click Me</button>
                            </form>
                            <br />
                            {this.state.name}

                            <br />
                            <br />

                            <Child value={this.state.todo} delete={this.delete} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ClassComponent

