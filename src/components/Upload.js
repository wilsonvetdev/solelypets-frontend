import React from 'react'
import { Form, Button } from 'semantic-ui-react' 

class NewItemForm extends React.Component {

    state = {
        image: {},
    }

    onChange = (event) => {
        event.persist()
        this.setState(() => {
            return {
                [event.target.name]: event.target.files[0]
            }
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const form = new FormData()
        form.append("image", this.state.image)
        if(!!this.props.animal_id) {
            form.append('animal_id', this.props.animal_id)
            fetch('http://localhost:3000/items_upload', {
                method: "POST",
                headers: { 'Authorization': localStorage.token },
                body: form
            })
            .then(response => response.json())
            .then(imgObj => {
                this.props.getImg(imgObj)
                this.props.updateAnimalImg(imgObj)
            })
        } else {
            console.log('logic here for shelter image')
            fetch('http://localhost:3000/items_upload', {
                method: "POST",
                headers: { 'Authorization': localStorage.token },
                body: form
            })
            .then(response => response.json())
            .then(imgObj => {
                this.props.updateImg(imgObj)
            })
        }
    }

    render(){
        return (
            <Form onSubmit={this.onSubmit}>
                <label>Upload a new image</label>
                <Form.Input type="file" name="image" onChange={this.onChange}/>
                <Button content='Upload' type="submit" />
            </Form>
        )
    }
}

export default NewItemForm