import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function AnimalShelterContainer(props) {
    let arrayOfShelterComponents = props.animalShelters.map(shelter => {
        return(
            <li  key={shelter.id}>
                <Link to={`/animal_shelters/${shelter.id}`}>
                {shelter.name}
                </Link>
            </li>
        )
    })
    return(
        <div>
            <h1>Animal Shelter Container</h1>
            <ul>
                {arrayOfShelterComponents}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        animalShelters: state.animalSheltersInfo.animalShelters
    }
}

export default connect(mapStateToProps)(AnimalShelterContainer)