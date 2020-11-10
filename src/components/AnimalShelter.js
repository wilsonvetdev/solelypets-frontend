import React from 'react'
import { connect } from 'react-redux'
import { Button, Header, Divider, Image, Segment, Item } from 'semantic-ui-react'

class AnimalShelter extends React.Component{

    handleClick = event => {
        const stripe = window.Stripe(process.env.REACT_APP_STRIPE_API_KEY)
        fetch('http://localhost:3000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({
                animal_shelter_id: this.props.shelter.id
            })
        })
        .then(response => response.json())
        .then(session => {
            console.log(session, stripe)
            return stripe.redirectToCheckout({ sessionId: session.id})
        })
        .then(result => {
            // If `redirectToCheckout` fails due to a browser or network
            // error, you should display the localized error message to your
            // customer using `error.message`.
            if(result.error) {
                alert(result.error.message)
            }
        })
        .catch(error => {console.log('ERROR:', error)})
    }
    render() {
        let { name, full_address, email, animals, items  } = this.props.shelter
        console.log(this.props.shelter)
        let listOfAnimals = animals.map(animal => {
            return <Item.Group key={animal.id}>
                        <Item>   
                            <Item.Image src={animal.items.length === 0 ? null : animal.items[animal.items.length-1].image} size='small'/>
                            <Item.Content>
                            <Item.Header>{animal.capitalized_name}</Item.Header>
                            <p>Type: {animal.capitalized_species}</p>
                            <p>Description: {animal.description}</p>
                            </Item.Content>
                        </Item>
                        <Divider />
                    </Item.Group>
        })
        return(
            <Segment>
                <Header size='huge' color='teal'> {name}</Header>
                <Image size='medium' src={items[items.length - 1].image} />
                <h3>Email: {email}</h3>
                <h3>Address: {full_address} </h3>
                <Divider></Divider>
                {
                    this.props.shelterInfo.role ? null 
                    :
                    <Button content='Donate $5' onClick={this.handleClick} />
                }
                <ul>
                    {listOfAnimals}
                </ul>
            </Segment>
        )
    }
}

const mapStateToProps = state => {
    return {
        shelterInfo: state.shelterInfo
    }
}

export default connect(mapStateToProps)(AnimalShelter)