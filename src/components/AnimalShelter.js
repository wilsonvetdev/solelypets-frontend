import React from 'react'
import { connect } from 'react-redux'
import { Button, Header, Divider, Image, Segment, Item, Icon, List } from 'semantic-ui-react'
import defaultImg from '../images/defaultImg.png'
import DonationModal from './DonationModal'

class AnimalShelter extends React.Component{

    createCheckOut = (amount) => {
        const stripe = window.Stripe(process.env.REACT_APP_STRIPE_API_KEY)
        fetch('http://localhost:3000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({
                animal_shelter_id: this.props.shelter.id,
                amount: amount
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
        let listOfAnimals = animals.map(animal => {
            return <Item.Group key={animal.id}>
                        <Item>   
                            <Item.Image circular size='medium' src={animal.items.length === 0 ? defaultImg : animal.items[animal.items.length-1].image}/>
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
                <Image rounded size='medium' src={items[items.length - 1].image} />
                <List size='huge'>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>{email}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{full_address}</List.Content>
                    </List.Item>
                </List>
                {
                    this.props.shelterInfo.role ? null 
                    :
                    <DonationModal createCheckOut={this.createCheckOut}/>
                }
                {/* <Button content='Donate $5' onClick={this.handleClick} /> */}
                <Divider></Divider>
                <Header size='huge' color='teal'>
                <Icon name='paw' />
                Our Animals
                </Header>
                {listOfAnimals.length ?
                <ul>
                    {listOfAnimals}
                </ul>
                :
                <Header>This shelter haven't uploaded any animals yet. </Header>
                }
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