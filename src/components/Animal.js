import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

class Animal extends React.Component {
    
    render(){
        let { id, capitalized_name, capitalized_species, description } = this.props.animal
        return(
            <li>
                <p>Name: {capitalized_name}</p>
                <p>Type: {capitalized_species}</p>
                <p>Description: {description}</p>
                <Button content='Delete' />
                <Divider></Divider>
            </li>
        )
    }
}

export default Animal