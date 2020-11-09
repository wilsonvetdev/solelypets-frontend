import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
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
            return <li key={shelter}> { shelter } </li>
        })
        return(
            <Segment>
                <Header color='teal' size='huge'> 
                Hi {first_name.replace(/^\w/, char => char.toUpperCase())}! 
                </Header>
                <p>You have made <strong>{paid_donations_count}</strong> donations in the past.</p>
                <p>Your donation total so far: <strong>${total_donations_amount}</strong></p>
                <p>You have donated to the following animal shelters:</p>
                {donated_to_shelters.length === 0 ? 
                    <p>none so far, get donating!</p>
                    :
                    <ul>
                        {donated_to_shelters}
                    </ul>
                }
            </Segment>
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