import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Grid, Select } from 'semantic-ui-react'
import { setUserInfo } from '../actions/users'
import { setShelterInfo } from '../actions/shelters'

class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        logging_in_as: 'user',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSelect = (event, {value}) => {
        this.setState({
            logging_in_as: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.state.logging_in_as === 'user'){
            fetch('http://localhost:3000/user_login', {
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
        }else{
            fetch('http://localhost:3000/shelter_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:this.state.email,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(shelterInfo => {
                this.props.setShelterInfo(shelterInfo)
                localStorage.token = shelterInfo.token 
                this.props.history.push('/user_home')
            })
        }
    }

    render(){
        const { email, password } = this.state
        const userTypes = [
            {key: 'user', value: 'user', text: 'General User/Donor'},
            {key: 'animal_shelter', value: 'animal_shelter', text: 'Animal Shelter'}
        ]
        return(
            <Grid columns={3}>
                <Grid.Row>
                <Grid.Column></Grid.Column>
                <Grid.Column>
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
                        </Form.Group>
                        <Form.Group>
                        <Form.Button content='Log In' />
                        <Select placeholder='Select User Type' options={userTypes} onChange={this.handleSelect} />
                        </Form.Group>            
                    </Form>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
        setShelterInfo: (shelterInfo) => dispatch(setShelterInfo(shelterInfo))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))