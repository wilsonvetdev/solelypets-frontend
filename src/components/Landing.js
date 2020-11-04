import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function Landing() {
    return(
        <div>
            <h1>Hello, Kind Person!</h1>
            <h2>Are you here to register as a donor or animal shelter?</h2>
            <Button as={Link} to='/register'>Donor</Button>
            <Button as={Link} to='/shelter_register'>Animal Shelter</Button>
        </div>
    )
}

export default Landing