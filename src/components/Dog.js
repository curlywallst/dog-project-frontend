import React, { useState } from 'react'
import DogEditForm from '../containers/DogEditForm'

const Dog = (props) => {
    const [dogEditFormFlag, setDogEditFormFlag] = useState(false)

    const toggleEditDogForm = () => {
        const toggle = !dogEditFormFlag
        setDogEditFormFlag(toggle)
    }

    return (
        <div>
            <div>
                <h4>{props.dog.name}</h4>
                {dogEditFormFlag ? <DogEditForm toggleForm={toggleEditDogForm} editTheDog={props.editTheDog} dog={props.dog} owner={props.owner} /> : <button onClick={toggleEditDogForm}>Edit Dog</button>}
                <button onClick={() => props.deleteTheDog(props.dog.id)} >Delete</button>
            </div>
        </div>
    )
}

export default Dog