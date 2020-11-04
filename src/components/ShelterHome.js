import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ShelterHome extends React.Component {

    render(){
        let { first_name, last_name, name, email, full_address, donations_received } = this.props
        return(
            <div>
                <Header>Logged in as: {name}</Header>
                <Header>Account Details:</Header>
                <ul>
                    <li>Point of Contact: {last_name}, {first_name}</li>
                    <li>Email: {email}</li>
                    <li>Address: {full_address}</li>
                    <li>Donations Received: ${donations_received} </li>
                </ul>
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
        donations_received: state.shelterInfo.donations_received
    }
}

export default connect(mapStateToProps)(ShelterHome)