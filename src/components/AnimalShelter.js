import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import DonationForm from './DonationForm'

class AnimalShelter extends React.Component{

    state = {
        open: false,
    }
    
    render() {
        let { name, address, city, state, email  } = this.props.shelter
        return(
            <div>
                <h2>Shelter Name: {name}</h2>
                <h3>Email: {email}</h3>
                <h3>Address: {address}, {city}, {state}</h3>
                <Modal
                onClose={() => this.setState({open: false})}
                onOpen={() => this.setState({open: true})}
                open={this.state.open ? true : false}
                trigger={<Button>Donate</Button>}
                >
                    <Modal.Header>Input Card Info</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <DonationForm />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => this.setState({open: false})}>
                        Done
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
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