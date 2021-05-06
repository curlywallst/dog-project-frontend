import React from 'react'
import { Link } from 'react-router-dom'

const NewOwnerButton = () => {

    return (
        <div>
            <Link to={'/owners/new'}>
                <button>Add Owner</button>
            </Link>
        </div>
    )
}

export default NewOwnerButton