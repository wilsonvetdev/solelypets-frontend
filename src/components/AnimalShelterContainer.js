import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Segment, Card, Image } from 'semantic-ui-react'
import twobirds from '../images/twobirds.jpg'

function AnimalShelterContainer(props) {
    let arrayOfShelterComponents = props.animalShelters.map(shelter => {
        return(
            <Card centered key={shelter.id}>
                <Image 
                    src={
                        shelter.items 
                        ? 
                        shelter.items[shelter.items.length-1].image 
                        :
                        twobirds } 
                    wrapped ui={false} 
                    
                />   

                <Card.Content>
                    <Card.Header>{shelter.name}</Card.Header>
                    <Link to={`/animal_shelters/${shelter.id}`}>
                    view shelter
                    </Link>
                    <Card.Description>{shelter.full_address}</Card.Description>
                </Card.Content>
            </Card>
        )
    })
    return(
        <Segment>
            <Card.Group>
                {arrayOfShelterComponents}
            </Card.Group>
        </Segment>
    )
}

const mapStateToProps = state => {
    return {
        animalShelters: state.animalSheltersInfo.animalShelters
    }
}

export default connect(mapStateToProps)(AnimalShelterContainer)