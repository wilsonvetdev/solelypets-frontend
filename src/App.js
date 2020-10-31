import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import AnimalShelterContainer from './components/AnimalShelterContainer'
import { setAnimalShelters } from './actions/animalShelters'
import AnimalShelter from './components/AnimalShelter'
import LoginForm from './components/LoginForm'

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/animal_shelters')
    .then(response => response.json())
    .then(sheltersArray => {
      this.props.setAnimalShelters(sheltersArray)
    })
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
      <div>
        <h1>SolelyPets</h1>
        <ul>
        <li><Link to='/'>Home Page</Link></li>
        <li><Link to='/animal_shelters'>All Animal Shelters</Link></li>
        <li><Link to='/login'>Log In</Link></li>
        </ul>

        <Switch>
          <Route path='/animal_shelters' exact>
            <AnimalShelterContainer />
          </Route>
          <Route path='/animal_shelters/:id' render={this.singleShelter} />
          <Route path='/login' component={LoginForm} />
        </Switch>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    animalShelters: state.animalSheltersInfo.animalShelters
  }
}

const mapDispatchToProps = (dispatch) => {
  return { setAnimalShelters: (sheltersArray) => dispatch(setAnimalShelters(sheltersArray)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
