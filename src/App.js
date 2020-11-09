import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import { setAnimalShelters } from './actions/animalShelters'
import { setUserInfo } from './actions/users'
import { setShelterInfo } from './actions/shelters'
import { Container, Divider, Header, Grid, Segment } from 'semantic-ui-react'
import AnimalShelterContainer from './components/AnimalShelterContainer'
import AnimalShelter from './components/AnimalShelter'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ShelterRegisterForm from './components/ShelterRegisterForm'
import UserHome from './components/UserHome'
import ShelterHome from './components/ShelterHome'
import Landing from './components/Landing'
import MenuItem from './components/Menu'

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/animal_shelters')
    .then(response => response.json())
    .then(sheltersArray => {
      this.props.setAnimalShelters(sheltersArray)
    })

    if(localStorage.token){
      fetch('http://localhost:3000/keep_logged_in', {
        method: 'GET',
        headers: {
          'Authorization': localStorage.token
        }
      })
      .then(response => response.json())
      .then(response => {
        if(response.role === 'AnimalShelter') {
          this.props.setShelterInfo(response)
        } else {
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

  handleLogOut = () => {
      return <Redirect to='/' />
  }

  render(){
    return(
      <Container>
        <Container>
          <Header size='huge'>
            <Link style={{color: '#11B5AC'}} to='/'>SolelyPets</Link>
          </Header>
        </Container>

        <Container>
        <MenuItem />
        </Container>

        <Switch>
          <Route path='/animal_shelters' exact>
            <AnimalShelterContainer />
          </Route>
          <Route path='/' component={Landing} exact/>
          <Route path='/animal_shelters/:id' render={this.singleShelter} />
          <Route path='/login' component={LoginForm} />
          <Route path='/logout' render={this.handleLogOut} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/shelter_register' component={ShelterRegisterForm} />
          <Route path='/user_home' component={UserHome} />
          <Route path='/shelter_home' component={ShelterHome} />
        </Switch>

      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    animalShelters: state.animalSheltersInfo.animalShelters,
    userInfo: state.userInfo,
    shelterInfo: state.shelterInfo
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    setAnimalShelters: (sheltersArray) => dispatch(setAnimalShelters(sheltersArray)),
    setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
    setShelterInfo: (shelterInfo) => dispatch(setShelterInfo(shelterInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
