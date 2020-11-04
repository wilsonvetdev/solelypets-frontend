import React from 'react'
import { Button, Header } from 'semantic-ui-react'

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
        let { name, full_address, email  } = this.props.shelter
        return(
            <div>
                <Header size='huge' color='teal'>Shelter Name: {name}</Header>
                <h3>Email: {email}</h3>
                <h3>Address: {full_address} </h3>
                <Button content='Donate $5' onClick={this.handleClick} />
            </div>
        )
    }
}

export default AnimalShelter