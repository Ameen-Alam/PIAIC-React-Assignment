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
            id: 4,
            first_name: "sheikh ameen",
            last_name: "alam",
            email: "sheikhameen@gmail.com"
        }

        //  post
        axios.post('http://localhost:3000/employees', params)
            .then((res) => {
                console.log(res.data, "res")
            })
            .catch((error) => (
                console.log(error, "error")
            ))

        //  update
        axios.put(`http://localhost:3000/employees/${params.id}`, params)
            .then((res) => {
                console.log(res.data, "res")
            })
            .catch((error) => (
                console.log(error, "error")
            ))


        //  delete
        // axios.delete(`http://localhost:3000/employees/1`)
        //     .then((res) => {
        //         console.log(res.data, "res")
        //     })
        //     .catch((error) => (
        //         console.log(error, "error")
        //     ))

        //  get
        axios.get('http://localhost:3000/employees')
            .then((res) => {
                setFecthAPI(res.data)
                console.log(res.data, "res")
            })
            .catch((error) => (
                console.log(error, "error")
            ))

        // get by fetch
        fetch('http://localhost:3000/employees')
            .then((res) => {
                return res.json()
            })
            .then((res2) => {
                console.log(res2, "res2")
            })
            .catch((error) => (
                console.log(error, "error")
            ))



        // Calling makeGetRequest async function by useEffect - for mount and update
        // makeGetRequest()


    }, [])
    // end useEffect





    // makeGetRequest
    const makeGetRequest = async () => {



        // post // edit
        const params = {
            id: 4,
            first_name: "Sheikh",
            last_name: "ameen",
            email: "sheikhameen@gmail.com"
        }


        // *********** Exmaple 1 post Method
        //  post

        let res1 = await axios.post('http://localhost:3000/employees', params)
        console.log(res1.data, "res")


        // *********** -end- ********** //








        // *********** Exmaple 2 put Method
        //  edit


        let res2 = await axios.put(`http://localhost:3000/employees/${params.id}`, params)
        console.log(res2.data, "res")

        // *********** -end- ********** //











        // *********** Exmaple 3 delete Method
        //  delete

        let res3 = await axios.delete(`http://localhost:3000/employees/1`)
        console.log(res3.data, "res")

        // *********** -end- ********** //











        // *********** Exmaple 4 get Method
        //  get

        let res4 = await axios.get('http://localhost:3000/employees')
        console.log(res4.data, "res")

        // *********** -end- ********** //











        // *********** Exmaple 5 Get Method
        // Get

        let res5 = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        let data = res5
        console.log(data, "data")

        // *********** -end- ********** //









        // *********** Exmaple 6 Get head
        // head

        let res6 = await axios.head('https://jsonplaceholder.typicode.com/todos/')
        console.log(res6.status, "Status")
        console.log(res6.headers["content-type"], "content-type")
        console.log(res6.headers["last-modified"], "last-modified")

        // *********** -end- ********** //









        // *********** Exmaple 7 basic API
        // basic API

        const config = {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos/',
            // headers: { 'User-Agent': 'Console app' }
        }
        let res7 = await axios(config)
        console.log(res7, 'res')

        // *********** -end- ********** //









        // *********** Exmaple 8 Post Method
        // post


        let res8 = await axios.post("https://jsonplaceholder.typicode.com/todos/", params)
        console.log(res8.data, "res8.data")

        // *********** -end- ********** //






        // *********** Exmaple 9 Delete Method
        // delete

        // let res9 = await axios.delete("https://jsonplaceholder.typicode.com/todos/id")
        // console.log(res9.data, "res9.data")

        // *********** -end- ********** //





    }
    // end makeGetRequest
    console.log(makeGetRequest, "makeGetRequest")
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
                            <li key={key} id={val.id} >{val.first_name} {val.last_name}</li>
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