import React, { useEffect, useState } from 'react'
import ameenalam from '../../assets/images/ameenalam.jpg'
import axios from 'axios'

const About = () => {

    // react hooks useState
    const [fecthAPI, setFecthAPI] = useState([])



    // react hooks useEffect
    useEffect(() => {
        // post
        const params = {
            id: "ameenalam123",
            name: "ameen"
        }

        axios.post('https://jsonplaceholder.typicode.com/todos/', params)
            .then((res) => {
                console.log(res.data, "res")
            })
            .catch((error) => (
                console.log(error, "error")
            ))

        //  get
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((res) => {
                setFecthAPI(res.data)
                console.log(res.data, "res")
            })
            .catch((error) => (
                console.log(error, "error")
            ))






        // Calling makeGetRequest async function by useEffect - for mount and update
        // makeGetRequest()


    }, [])
    // end useEffect






    // const makeGetRequest = async () => {




    // *********** Exmaple 1 Get Method
    // Get

    // let res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    // let data = res
    // console.log(data, "data")

    // *********** -end- ********** //




    // *********** Exmaple 2 Get head
    // head

    // let res = await axios.head('https://jsonplaceholder.typicode.com/todos/')
    // console.log( res.status ,"Status")
    // console.log( res.headers["content-type"] ,"content-type")
    // console.log( res.headers["last-modified"] ,"last-modified")

    // *********** -end- ********** //






    // *********** Exmaple 3 basic API
    // basic API

    // const config = {
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos/',
    //     // headers: { 'User-Agent': 'Console app' }
    // }
    // let res = await axios(config)
    // console.log(res, 'res')

    // *********** -end- ********** //







    // *********** Exmaple 3 Post Method
    // post

    // const params = {
    //     id : "ameenalam123",
    //     name : "ameen"
    // }
    // let res = await axios.post("https://jsonplaceholder.typicode.com/todos/", params)
    // console.log(res.data)

    // *********** -end- ********** //






    // *********** Exmaple 3 Delete Method
    // delete

    // let res = await axios.delete("https://jsonplaceholder.typicode.com/todos/id")
    // console.log(res.data)

    // *********** -end- ********** //





    // }

    console.log(fecthAPI, "fecthAPI")
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
                <ul>

                    {/* react hook useState print fecthAPI array []  */}
                    {
                        fecthAPI.map((val, key) => (
                            <li key={key} id={val.id} >{val.title}</li>
                        ))
                    }

                </ul>
                <br />
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