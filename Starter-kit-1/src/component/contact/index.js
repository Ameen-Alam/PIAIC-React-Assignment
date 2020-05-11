import React, { useState } from 'react'


const Contact = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
        address: "",
        address2: "",
        zip: "",
        city: "",
        state: "",
        checkValue: [],
    })

    const [payload, setPayload] = useState([])

    const changeHandler = (e) => {
        const { name, value } = e.target
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const checkHandler = (e) => {
        const { name, value, checked } = e.target
        checked ?
            setState(prev => ({
                ...prev,
                [name]: [value],
            }))
            :
            setState(prev => ({
                ...prev,
                [name]: [],
            }))
    }

    const submit = (e) => {
        e.preventDefault()
        let _payload = payload
        let _state = state
        state.email !== "" && state.password !== "" && _payload.push(_state) && setPayload(_payload)

        setState({
            email: "",
            password: "",
            address: "",
            address2: "",
            zip: "",
            city: "",
            state: "",
            checkValue: [],
        })
    }

    console.log(state)
    console.log(payload)
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
                        <li className="breadcrumb-item active">Contact</li>
                    </ol>
                </nav>
            </div>
            <div className="container my-5" >
                <form onSubmit={submit} >
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" value={state.email} name="email" onChange={changeHandler} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" value={state.password} name="password" onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={state.address} name="address" onChange={changeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={state.address2} name="address2" onChange={changeHandler} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" value={state.city} name="city" onChange={changeHandler} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control" value={state.state} name="state" onChange={changeHandler} >
                                <option>Choose...</option>
                                <option value="...">...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" value={state.zip} name="zip" onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" value="checkout" name="checkValue" onChange={checkHandler} />
                            <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;