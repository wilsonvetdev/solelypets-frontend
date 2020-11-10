import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Grid, Segment, Header, Image } from 'semantic-ui-react'
import { setUserInfo } from '../actions/users'
import fieldwdeers from '../images/fieldwdeers.jpg'

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
            <Segment>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                <Image centered size='large' src={fieldwdeers}/>
                </Grid.Column>
                <Grid.Column verticalAlign='middle'>
                    <Header color='teal' textAlign='center'>Register A User</Header>
                    <Form onSubmit={this.handleSubmit}>
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
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            placeholder='Password'
                            name='password'
                            value={password}
                            type='password'
                            onChange={this.handleChange}
                        />
                        <Form.Button content='Log In' />          
                    </Form>
                </Grid.Column>
            </Grid>
            </Segment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)) }
}

export default connect(null, mapDispatchToProps)(withRouter(RegisterForm))