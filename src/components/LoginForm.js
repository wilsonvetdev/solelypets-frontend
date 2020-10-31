import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { setUserInfo } from '../actions/users'


class LoginForm extends React.Component {

    state = {
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
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email, 
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(userInfo => {
            this.props.setUserInfo(userInfo)
            localStorage.token = userInfo.token
            this.props.history.push('/animal_shelters')
        })
    }

    render(){
        const { email, password } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
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
                <Form.Button content='Submit' />
                </Form.Group>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)) }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))