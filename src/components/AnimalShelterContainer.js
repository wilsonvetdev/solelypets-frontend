import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header, Card, Image } from 'semantic-ui-react'
import twobirds from '../images/twobirds.jpg'

function AnimalShelterContainer(props) {
    let arrayOfShelterComponents = props.animalShelters.map(shelter => {
        return(
            <Card centered key={shelter.id}>

            <Image 
                src={
                    shelter.items.length === 0 ? twobirds :
                    shelter.items[shelter.items.length-1].image} 
                wrapped ui={false} 
                
            />   

                <Card.Content>
                    <Card.Header>{shelter.name}</Card.Header>
                <Link to={`/animal_shelters/${shelter.id}`}>
                view shelter
                </Link>
                </Card.Content>
            </Card>
        )
    })
    return(
        <Container>
            <Header color='teal' size='large'>Animal Shelters</Header>
            <Card.Group>
                {arrayOfShelterComponents}
            </Card.Group>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        animalShelters: state.animalSheltersInfo.animalShelters
    }
}

export default connect(mapStateToProps)(AnimalShelterContainer)