import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Grid } from 'semantic-ui-react'
import { setShelterInfo } from '../actions/shelters'


class ShelterRegisterForm extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/shelter_register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                name: this.state.name,
                email: this.state.email, 
                password: this.state.password,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state
            })
        })
        .then(response => response.json())
        .then(shelterInfo => {
            console.log(shelterInfo)
            this.props.setShelterInfo(shelterInfo)
            localStorage.token = shelterInfo.token
            this.props.history.push('/animal_shelters')
        })
    }

    render(){
        const { first_name, last_name, name, email, password, address, city, state } = this.state
        return(
            <Grid columns={3}>
                <Grid.Row>
                <Grid.Column></Grid.Column>
                <Grid.Column>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                        <Form.Input
                            placeholder='First Name'
                            name='first_name'
                            value={first_name}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            placeholder='Last Name'
                            name='last_name'
                            value={last_name}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            placeholder='Shelter Name'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Input
                            placeholder='Address'
                            name='address'
                            value={address}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            placeholder='City'
                            name='city'
                            value={city}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            placeholder='State'
                            name='state'
                            value={state}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Input
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Button content='Log In' />
                        </Form.Group>            
                    </Form>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { setShelterInfo: (shelterInfo) => dispatch(setShelterInfo(shelterInfo)) }
}

export default connect(null, mapDispatchToProps)(withRouter(ShelterRegisterForm))