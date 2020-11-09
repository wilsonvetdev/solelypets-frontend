import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Segment, Container } from 'semantic-ui-react'

function Landing() {
    return(
        <Segment textAlign='center'>
            <Header size='huge' color='teal'>Hello, Kind Person!</Header>
            <Header size='large' color='teal'>Are you here to register as a donor or animal shelter?</Header>
            <Button as={Link} to='/register'>Donor</Button>
            <Button as={Link} to='/shelter_register'>Animal Shelter</Button>
        </Segment>
    )
}

export default Landing