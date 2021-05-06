import React, { useState, useEffect} from 'react'
import Dog from '../components/Dog'
import DogForm from './DogForm'

const Owner = (props) => {
    const [owner, setOwner] = useState({
        dogs: [],
    })
    const [dogFormFlag, setDogFormFlag] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:9292/owners/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setOwner(data)
        })
    }, [props.match.params.id])

    const deleteDog = (id) => {
        fetch(`http://localhost:9292/owners/${owner.id}/dogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            const newDogs = owner.dogs.filter(d => d.id !== id)
            setOwner({
                ...owner,
                dogs: newDogs
                
            })
        })
    }

    const editDog = (dog) => {
        fetch(`http://localhost:9292/owners/${owner.id}/dogs/${dog.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dog)
        })
        .then(res => res.json())
        .then((data) => {
            const newDogs = owner.dogs.map(d => {
                    if (d.id === data.id) {
                        return data
                    } else {
                        return d
                    }
                })
            setOwner({
                ...owner,
                dogs: newDogs
            })
        })
    }

    const toggleAddDogForm = (e) => {
        console.log(e.target)
        setDogFormFlag(true)
    }



    const addDog = (dog) => {
        fetch(`http://localhost:9292/owners/${owner.id}/dogs`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dog)
        })
        .then(r => r.json())
        .then(data => {
            console.log("New Dog", data)
            setOwner({
                ...owner,
                dogs: [...owner.dogs, data]
            })
            setDogFormFlag(false)
        })
    }

    const dogs = owner.dogs.map(d => <Dog key={d.id} dog={d} deleteTheDog={deleteDog} editTheDog={editDog} owner={owner} />)
    
    return (
        <div>
            <br/>
            <h2>{owner.name}</h2>
            <hr/>
            <h3>Dogs:</h3>
            {dogs}
            <br/>
            <br/>
            {dogFormFlag ?  <DogForm  addADog={addDog} owner={owner} /> : <button onClick={toggleAddDogForm}>Add Dog</button>}
        </div>
    )
}

export default Owner

