import React from 'react'
import { Link } from 'react-router-dom'

const Type = ({type}) => {
    return(
    <div>
        <Link to={`/${type}`}>{type}</Link>
    </div>
    )
}

export default Type