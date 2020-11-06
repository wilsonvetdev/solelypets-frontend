import React from 'react'

class NewItemForm extends React.Component {

    state = {
        image: {},
        video: {}
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
        form.append("video", this.state.video) 
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
        .then(console.log)
    }

    render(){
        return (
            <div className="form">
                <h1>New Upload</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file" name="image" onChange={this.onChange}/>
                    <br/>
                    {/* <label>Video Upload</label>
                    <input type="file" name="video" onChange={this.onChange}/>
                    <br/> */}
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default NewItemForm