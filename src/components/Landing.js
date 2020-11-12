import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Container } from 'semantic-ui-react'

function Landing() {
    return(
        <div className='landing-bg'>
            <Container textAlign='center'>
                <Header size='huge' color='teal'>Hello, Kind Person!</Header>
                <Header size='large' color='teal'>Are you here to register as a donor or animal shelter?</Header>
                <Button as={Link} to='/register'>Donor</Button>
                <Button as={Link} to='/shelter_register'>Animal Shelter</Button>
            </Container>           
        </div>
    )
}

export default Landing