import React from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteAnimal, updateAnimal } from '../actions/shelters'

class Animal extends React.Component {
    
    state = {
        name: this.props.animal.capitalized_name,
        species: this.props.animal.capitalized_species,
        description: this.props.animal.description,
        edit: false
    }

    handleDelete = event => {
        fetch(`http://localhost:3000/animals/${this.props.animal.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.token
            },
        })
        .then(response => response.json())
        .then(returnedObj => {
            this.props.deleteAnimal(returnedObj)
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    toggleEdit = (event) => {
        this.setState({ edit: !this.state.edit })
        if(this.state.edit) {
            this.handleUpdate(event)
        }
    }



    handleUpdate = (event) => {
        fetch(`http://localhost:3000/animals/${this.props.animal.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({
                name: this.state.name,
                species: this.state.species,
                description: this.state.description,
                id: this.props.animal.id
            })
        })
        .then(response => response.json())
        .then((updatedObj) => {
            this.props.updateAnimal(updatedObj)
        })
    }
    
    render(){
        let { capitalized_name, capitalized_species, description } = this.props.animal
        return(
            <li>
                {
                    this.state.edit ? 
                    <Form onSubmit={this.toggleEdit}>
                        <Form.Input 
                        label='Name'
                        icon='pencil' 
                        iconPosition='left' 
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                        <Form.Input 
                        label='Species'
                        icon='pencil' 
                        iconPosition='left' 
                        type='text'
                        name='species'
                        value={this.state.species}
                        onChange={this.handleChange}
                        />
                        <Form.TextArea 
                        label='Description'
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </Form>
                    :
                    <div>
                        <p>Name: {capitalized_name}</p>
                        <p>Type: {capitalized_species}</p>
                        <p>Description: {description}</p>
                    </div>
                }
                <Button content='Delete' onClick={this.handleDelete} />
                <Button content='Edit' onClick={this.toggleEdit} />
                <Divider></Divider>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteAnimal: (returendObj) => dispatch(deleteAnimal(returendObj)),
        updateAnimal: (returendObj) => dispatch(updateAnimal(returendObj))
    }
}

export default connect(null, mapDispatchToProps)(Animal)