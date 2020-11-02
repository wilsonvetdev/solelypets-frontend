import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import { setAnimalShelters } from './actions/animalShelters'
import { setUserInfo } from './actions/users'
import { Container, Divider, Header, Grid } from 'semantic-ui-react'
import AnimalShelterContainer from './components/AnimalShelterContainer'
import AnimalShelter from './components/AnimalShelter'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/animal_shelters')
    .then(response => response.json())
    .then(sheltersArray => {
      this.props.setAnimalShelters(sheltersArray)
    })

    fetch('http://localhost:3000/my_donations')
    .then(response => response.json())
    .then(console.log)

    if(localStorage.token){
      fetch('http://localhost:3000/keep_logged_in', {
        method: 'GET',
        headers: {
          'Authorization': localStorage.token
        }
      })
      .then(response => response.json())
      .then(response => {
        if(response.token){
          this.props.setUserInfo(response)
        }
      })
    }
  }

  singleShelter = (routerProps) => {
      let id = routerProps.match.params.id 
      let num_id = parseInt(id)
      let foundShelter = this.props.animalShelters.find(shelter => shelter.id === num_id)

      if(foundShelter){
        return <AnimalShelter {...routerProps} shelter={foundShelter} />
      } else {
        return <p>404 page</p>
      }
  }

  render(){
    return(
      <Container>
        <Container>
          <Header size='huge' color='teal'>SolelyPets</Header>
        </Container>

        <Divider />

        <Container>
          <Grid columns={4} divided textAlign='center'>
            <Grid.Row>
              <Grid.Column>
                <Link to='/'>Home Page</Link>
              </Grid.Column>
              <Grid.Column>
                <Link to='/animal_shelters'>All Animal Shelters</Link>
              </Grid.Column>
              <Grid.Column>
                <Link to='/login'>Log In</Link>
              </Grid.Column>
              <Grid.Column>
                <Link to='/register'>Register</Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Divider />

        <Switch>
          <Route path='/animal_shelters' exact>
            <AnimalShelterContainer />
          </Route>
          <Route path='/animal_shelters/:id' render={this.singleShelter} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
        </Switch>

      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    animalShelters: state.animalSheltersInfo.animalShelters,
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    setAnimalShelters: (sheltersArray) => dispatch(setAnimalShelters(sheltersArray)),
    setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
