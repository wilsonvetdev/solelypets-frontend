import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class UserHome extends React.Component {

    render(){
        let { 
            first_name, 
            email, 
            donated_to, 
            paid_donations_count, 
            total_donations_amount 
        } = this.props

        let donated_to_shelters = donated_to.map(shelter => {
            // shelter object shape below:
            // address: "3938 Annabell Harbor"
            // city: "East Asachester"
            // created_at: "2020-11-02T19:28:46.524Z"
            // email: "diego_homenick@halvorson.biz"
            // first_name: "Cody"
            // id: 6
            // last_name: "Hills"
            // name: "Officer Barbrady Animal Shelter"
            // password_digest: null
            // state: "Wisconsin"
            // updated_at: "2020-11-02T19:28:46.524Z"
            return <li key={shelter}> { shelter } </li>
        })

        return(
            <div>
                <Header color='teal' size='huge'> 
                Hi {first_name.replace(/^\w/, char => char.toUpperCase())}! 
                </Header>
                <p>You have made <strong>{paid_donations_count}</strong> donations in the past.</p>
                <p>Your donation total so far: <strong>${total_donations_amount}</strong></p>
                <p>You have donated to the following animal shelters:</p>
                <ul>
                    {donated_to_shelters}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        first_name: state.userInfo.first_name,
        email: state.userInfo.email,
        donated_to: state.userInfo.donated_to,
        paid_donations_count: state.userInfo.paid_donations_count,
        total_donations_amount: state.userInfo.total_donations_amount
    }
}

export default connect(mapStateToProps)(UserHome)