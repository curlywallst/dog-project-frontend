import React from 'react'
import { Link } from 'react-router-dom'

const OwnerLink = ({owner}) => {
    return (
        <div>
            <Link to={`/owners/${owner.id}`}>
                <h3><li>{owner.name}</li></h3>
            </Link>
        </div>
    )
}

export default OwnerLink