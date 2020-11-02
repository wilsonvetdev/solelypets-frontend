import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { setUserInfo } from '../actions/users'
import { Container, Grid } from 'semantic-ui-react'


class RegisterForm extends React.Component {

    state = {
        first_name: '',
        last_name: '',
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
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
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
        const { first_name, last_name, email, password } = this.state
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
    return { setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)) }
}

export default connect(null, mapDispatchToProps)(withRouter(RegisterForm))