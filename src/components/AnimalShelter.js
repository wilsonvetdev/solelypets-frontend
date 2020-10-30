import React from 'react'

function AnimalShelter(props){

    let { name, address, city, state, email  } = props.shelter

    return(
        <div>
            <h2>Shelter Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h3>Address: {address}, {city}, {state}</h3>
        </div>
    )
}

export default AnimalShelter

// address: "324 Kathline Mountain"
// city: "East Mandyville"
// email: "erin.reynolds@swaniawski.name"
// first_name: "Barbra"
// id: 6
// last_name: "West"
// name: "Sheila Broflovski Animal Shelter"
// password_digest: null
// state: "Hawaii"