import React from 'react'
import Animal from './Animal'

function AnimalContainer(props) {

    let listsOfAnimals = props.animals.map(animal => {
            return <Animal key={animal.id} animal={animal} />
        })

    return(
        <div>
            <h1>Animal Container</h1>
            <ul>
                {listsOfAnimals}
            </ul>
        </div>
    )

}

export default AnimalContainer