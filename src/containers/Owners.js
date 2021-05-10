import React, { useState, useEffect } from 'react'
import OwnerForm from './OwnerForm'
import OwnerLink from '../components/OwnerLink'

const Owners = () => {
    const [owners, setOwners] = useState([])
    const [ownerFormFlag, setOwnerFormFlag] = useState(false)

    useEffect(() => {
      fetch('http://localhost:9292/owners')
      .then(res => res.json())
      .then(data => {
          console.log(data)
        setOwners(data)
      })
    }, [])

    const addOwner = (owner) => {
      fetch("http://localhost:9292/owners", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(owner)
      })
      .then(r => r.json())

      .then(data => {
          console.log("New Owner", data)
          setOwners([...owners, data])
      })
      setOwnerFormFlag(false)
  }

    const toggleAddOwnerForm = (e) => {
      console.log(e.target)
      setOwnerFormFlag(true)
    }

    const ownersList = owners.map(o => <OwnerLink key={o.id} owner={o} />)

    return (
        <div>
            <ul>
               {ownersList} 
            </ul>
            {ownerFormFlag ?  <OwnerForm  addAnOwner={addOwner} /> : <button onClick={toggleAddOwnerForm}>Add Owner</button>}
        </div>
    )
}

export default Owners
