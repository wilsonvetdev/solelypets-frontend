import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

class Animal extends React.Component {

    handleDelete = event => {
        fetch(`http://localhost:3000/animals/${this.props.animal.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.token
            },
        })
        .then(response => response.json())
        .then(returnedObj => {
            console.log(returnedObj)
        })
    }
    
    render(){
        let { capitalized_name, capitalized_species, description } = this.props.animal
        return(
            <li>
                <p>Name: {capitalized_name}</p>
                <p>Type: {capitalized_species}</p>
                <p>Description: {description}</p>
                <Button content='Delete' onClick={this.handleDelete} />
                <Divider></Divider>
            </li>
        )
    }
}

export default Animal