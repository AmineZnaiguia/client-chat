import React, {Fragment, useEffect}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utiles/setAuthToken';
import store from './store'

import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() =>{
    store.dispatch(loadUser());
  }, [])
  return (


  <Router>
    <Fragment>
      <Navbar />
      <Route exact path ='/' component={Landing} />
      <section className="container">
        <Alert />
        <Switch>
           <Route exact path ='/register' component={Register} />
           <Route exact path ='/Login' component={Login} />
        </Switch>
      </section>
    </Fragment>
    </Router>
  );}


export default App;
