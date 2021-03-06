import React from 'react'
import { connect } from 'react-redux'
import { Form, TextArea } from 'semantic-ui-react'
import { addAnimal } from '../actions/shelters'

class AddAnimalForm extends React.Component {

    state = {
        name: '',
        species: '',
        description: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        fetch('http://localhost:3000/animals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            },
            body: JSON.stringify({
                name: this.state.name,
                species: this.state.species,
                description: this.state.description
            })
        })
        .then(response => response.json())
        .then(newAnimalObj => {
            this.props.addAnimal(newAnimalObj)
            this.setState({
                name: '',
                species: '',
                description: ''
            })
        })
    }

    render() {
        let { name, species, description } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                />
                <Form.Input
                    placeholder='Species'
                    name='species'
                    value={species}
                    onChange={this.handleChange}
                />

                <Form.Field
                    control={TextArea}
                    placeholder='Description'
                    name='description'
                    value={description}
                    onChange={this.handleChange}
                />
                <Form.Button content='Add Animal' />
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAnimal: (animalObj) => dispatch(addAnimal(animalObj))
    }
}

export default connect(null, mapDispatchToProps)(AddAnimalForm)