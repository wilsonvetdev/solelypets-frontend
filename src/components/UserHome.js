import React from 'react'
import { Header, Segment, List, Statistic } from 'semantic-ui-react'
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
            return <List.Item key={shelter}> 
                        <List.Icon name='paw' />
                        <List.Content>
                            { shelter } 
                        </List.Content>
                    </List.Item>
        })
        return(
            <Segment>
                <Header color='teal' size='huge'> 
                Hi {first_name.replace(/^\w/, char => char.toUpperCase())}! 
                </Header>              
                <Statistic.Group>
                    <Statistic>
                        <Statistic.Value>
                            {paid_donations_count}
                        </Statistic.Value>
                        <Statistic.Label>
                            Times You Donated
                        </Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>
                            ${total_donations_amount}
                        </Statistic.Value>
                        <Statistic.Label>
                            Total Amount Donated
                        </Statistic.Label>
                    </Statistic>
                </Statistic.Group>
                <Header color='teal'>You have donated to the following animal shelters:</Header>
                {donated_to_shelters.length === 0 ? 
                    <p>none so far, get donating!</p>
                    :
                    <List size='big'>
                        {donated_to_shelters}
                    </List>
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