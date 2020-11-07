import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AddAnimalForm from './AddAnimalForm'
import AnimalContainer from './AnimalContainer'
import NewItemForm from './Upload'
import { updateImg } from '../actions/shelters'

class ShelterHome extends React.Component {

    state = {
        image: ''
    }

    render(){
        let { first_name, last_name, name, email, full_address, donations_received, animals, image } = this.props
        return(
            <div>
                <Header>Logged in as: {name}</Header>
                {this.state.image ?
                        <Image src={this.state.image} size='small'/>
                        :
                        <Image src={image} size='small'/>
                }
                <NewItemForm updateImg={this.props.updateImg} />
                <Header>Account Details:</Header>
                <ul>
                    <li>Point of Contact: {last_name}, {first_name}</li>
                    <li>Email: {email}</li>
                    <li>Address: {full_address}</li>
                    <li>Donations Received: ${donations_received} </li>
                </ul>
                <Header>Your List of Animals:</Header>
                <div>
                    <AddAnimalForm />
                </div>
                <div>
                    <AnimalContainer animals={animals} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        first_name: state.shelterInfo.first_name,
        last_name: state.shelterInfo.last_name,
        name: state.shelterInfo.name,
        email: state.shelterInfo.email,
        full_address: state.shelterInfo.full_address,
        donations_received: state.shelterInfo.donations_received,
        animals: state.shelterInfo.animals,
        image: state.shelterInfo.image
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateImg: imgObj => dispatch(updateImg(imgObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelterHome)
