import React, { useState, useEffect } from 'react'
import NewOwnerButton from '../components/NewOwnerButton'

import OwnerLink from '../components/OwnerLink'

const Owners = () => {
    const [owners, setOwners] = useState([])

    useEffect(() => {
      fetch('http://localhost:9292/owners')
      .then(res => res.json())
      .then(data => {
          console.log(data)
        setOwners(data)
      })
    }, [])

    const ownersList = owners.map(o => <OwnerLink key={o.id} owner={o} />)

    return (
        <div>
            <ul>
               {ownersList} 
            </ul>
            <NewOwnerButton />
        </div>
    )
}

export default Owners
