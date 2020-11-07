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
        form.append('animal_id', this.props.animal_id)
        fetch(`http://localhost:3000/items_upload`, {
            method: "POST",
            headers: { 'Authorization': localStorage.token },
            body: form
        })
        .then(response => response.json())
        // {id: 4, image: "http://res.cloudinary.com/dcupfetpr/image/upload/v1604623148/fw5pjdmoloxxob68s5g2.jpg", video: null, created_at: "2020-11-06T00:39:08.578Z", updated_at: "2020-11-06T00:39:08.578Z"}
        // created_at: "2020-11-06T00:39:08.578Z"
        // id: 4
        // image: "http://res.cloudinary.com/dcupfetpr/image/upload/v1604623148/fw5pjdmoloxxob68s5g2.jpg"
        // updated_at: "2020-11-06T00:39:08.578Z"
        // video: null
        .then(imgObject => {
            this.props.getImg(imgObject)
        })
        // need credit card method to update animal instance
        // might need to go through reducer as well to update the other end
    }

    render(){
        return (
            <div className="form">
                <Form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <Form.Input type="file" name="image" onChange={this.onChange}/>
                    <br/>
                    <Button content='Upload' type="submit" />
                </Form>
            </div>
        )
    }
}

export default NewItemForm