import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Segment, Image } from 'semantic-ui-react'
import widefield from '../images/widefield.jpg'

function Landing() {
    return(
        <Segment textAlign='center'>
            <Header size='huge' color='teal'>Hello, Kind Person!</Header>
            <Header size='large' color='teal'>Are you here to register as a donor or animal shelter?</Header>
            <Button as={Link} to='/register'>Donor</Button>
            <Button as={Link} to='/shelter_register'>Animal Shelter</Button>
            <Image centered rounded fluid as='div' size='huge' src={widefield} style={{marginTop: '5px'}} /> 
        </Segment>
    )
}

export default Landing