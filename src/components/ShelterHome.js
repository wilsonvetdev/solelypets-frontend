import React from 'react'
import { Header, Image, Segment, Divider, Grid, List, Statistic } from 'semantic-ui-react'
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
            <Segment>
                <Header color='teal'>Logged in as: {name}</Header>
                <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        {this.state.image ?
                                <Image rounded src={this.state.image}/>
                                :
                                <Image rounded src={image}/>
                        }
                            <NewItemForm updateImg={this.props.updateImg} />
                            <Header>Account Details:</Header>
                            <List size='large'>
                                <List.Item>
                                    <List.Icon name='users' />
                                    <List.Content>
                                        Point of Contact: {last_name}, {first_name}
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='mail' />
                                    <List.Content>
                                        Email: {email}
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='marker' />
                                    <List.Content>
                                        Address: {full_address}
                                    </List.Content>
                                </List.Item>
                            </List>

                        <Statistic>
                            <Statistic.Value>
                                ${donations_received} 
                            </Statistic.Value>
                            <Statistic.Label>
                                Donations Received
                            </Statistic.Label>
                        </Statistic>
                        <Statistic>
                            <Statistic.Value>
                                {animals.length} 
                            </Statistic.Value>
                            <Statistic.Label>
                                Animals
                            </Statistic.Label>
                        </Statistic>

                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                            <Header>Use this form to add an animal</Header>
                            <AddAnimalForm />
                    </Grid.Column>
                </Grid>

                <Divider vertical>Or</Divider>
                </Segment>
                
                <Divider />

                <Header textAlign='center'>Your List of Animals:</Header>
                <AnimalContainer animals={animals} />


            </Segment>
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
