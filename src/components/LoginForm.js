import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Grid, Select, Segment, Header, Divider, Image, Button } from 'semantic-ui-react'
import { setUserInfo } from '../actions/users'
import { setShelterInfo } from '../actions/shelters'
import pupsinfield from '../images/pupsinfield.jpg'

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
                this.props.history.push('/user_home')
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
                this.props.history.push('/shelter_home')
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
            <Segment>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                <Image rounded centered size='large' src={pupsinfield}/>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Header color='teal' textAlign='center'>Log In Here</Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input
                            icon='user'
                            iconPosition='left'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            name='password'
                            value={password}
                            type='password'
                            onChange={this.handleChange}
                        />
                        <Select placeholder='Select User Type' options={userTypes} onChange={this.handleSelect} />
                        <Button floated='right' content='Log In' />
                    </Form>
                </Grid.Column>

            </Grid>

            <Divider vertical content='🐶' />
            </Segment>
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