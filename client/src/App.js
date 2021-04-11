import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import store from './utils/store';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import AddFriends from './pages/AddFriends';
import Nav from './components/Nav';
import GameRules from './components/GameRules';

import './App.css';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {

  return (

    
    <ApolloProvider client={client}>
      
      <GameRules/>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/addFriends' component={AddFriends} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
        </div>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;