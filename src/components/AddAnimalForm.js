import React from 'react'
import { connect } from 'react-redux'
import { Form, TextArea } from 'semantic-ui-react'

class AddAnimalForm extends React.Component {

    state = {
        name: '',
        species: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let { name, species, description } = this.state
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Input
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Input
                    placeholder='Species'
                    name='species'
                    value={species}
                    onChange={this.handleChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Field
                    control={TextArea}
                    placeholder='Description'
                    name='description'
                    value={description}
                    onChange={this.handleChange}
                />
                </Form.Group>
                <Form.Group>
                <Form.Button content='Add Animal' />
                </Form.Group>            
            </Form>
        )
    }
}

export default AddAnimalForm