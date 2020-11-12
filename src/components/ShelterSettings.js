import React from 'react'
import { connect } from 'react-redux'
import { updateShelterInfo } from '../actions/shelters'
import { Header, Segment, Form, Divider, Button } from 'semantic-ui-react'

class ShelterSettings extends React.Component {

    state = {
        first_name: this.props.shelterInfo.first_name,
        last_name: this.props.shelterInfo.last_name,
        email: this.props.shelterInfo.email,
        address: this.props.shelterInfo.address,
        city: this.props.shelterInfo.city,
        state: this.props.shelterInfo.state,
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpdate = (event) => {
        fetch(`http://localhost:3000/animal_shelters/update`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state 
            })
        })
        .then(response => response.json())
        .then((updatedObj) => {
            this.props.updateShelterInfo(updatedObj)
        })
    }

    render(){
        return(
            <Segment>
                <Header size='large' color='teal'>Settings</Header>
                <Divider />
                <Form onSubmit={this.handleUpdate}>
                    <Form.Input 
                        label='First Name'
                        type='text'
                        name='first_name'
                        value={this.state.first_name}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label='Last Name'
                        type='text'
                        name='last_name'
                        value={this.state.last_name}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label='Email'
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Address"
                        type='text'
                        name='address'
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label='City'
                        type='text'
                        name='city'
                        value={this.state.city}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label='State'
                        type='text'
                        name='state'
                        value={this.state.state}
                        onChange={this.handleChange}
                    />
                    <Button content='Delete' onClick={this.handleDelete} />
                    <Button content='Edit' onClick={this.handleUpdate} />
                </Form>
            </Segment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        updateShelterInfo: (shelterInfo) => dispatch(updateShelterInfo(shelterInfo))
    }
}

export default connect(null, mapDispatchToProps)(ShelterSettings)