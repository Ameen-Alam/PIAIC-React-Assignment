import React from 'react'

const Child = (props) => {
    let cssprop = {
        color: "#ddd"
    }
    return (
        <ul>
            {
                props.value.map((text, key) => {
                    return (
                        <li key={key} id={key} className="style1" style={cssprop} >
                            {text} <button className="btn btn-danger" onClick={props.delete.bind(null, key)} >delete</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Child;