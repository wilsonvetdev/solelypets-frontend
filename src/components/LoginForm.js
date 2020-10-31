import React from 'react'
import { Form } from 'semantic-ui-react'

class LoginForm extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
    
    }

    render(){
        const { firstName, lastName, email, password } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Input
                    placeholder='First Name'
                    name='firstName'
                    value={firstName}
                    onChange={this.handleChange}
                />
                <Form.Input
                    placeholder='Last Name'
                    name='lastName'
                    value={lastName}
                    onChange={this.handleChange}
                />
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
                <Form.Button content='Submit' />
                </Form.Group>
            </Form>
        )
    }
}

export default LoginForm