import React from 'react'
import { Link } from 'react-router-dom'

function Navitem(props) {
    return (
        <li id={props.item}>
            <Link
                to={props.tolink}
                onClick={props.activec.bind(this, props.item)}
            >
                {props.item}
            </Link>
        </li>
    )
}
export default Navitem
