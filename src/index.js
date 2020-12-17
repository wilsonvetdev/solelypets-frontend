import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import animalShelterReducer from './reducers/AnimalShelterReducer'
import shelterReducer from './reducers/ShelterReducer'
import userReducer from './reducers/UserReducer'
import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: 'pube4206ee93fa62117a3bdd30243cc49bc',
  site: 'datadoghq.com',
  forwardErrorsToLogs: true,
  sampleRate: 100,
})

let reducerPojo = {
  animalSheltersInfo: animalShelterReducer,
  shelterInfo: shelterReducer,
  userInfo: userReducer
}

let rootReducer = combineReducers(reducerPojo)

let store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
