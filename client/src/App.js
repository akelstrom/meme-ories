import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import store from './utils/store';
import Home from './pages/Home';
import Header from './components/Header';
import Signup from './pages/Signup-login';
import MemeList from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import AddFriends from './pages/AddFriends';
// import Nav from './components/Nav';
// import GameRules from './components/GameRules';
import './App.css';

import Dashboard from './pages/SingleMeme';


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

      <Router>
        <div>
          <Provider store={store}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup-login" component={Signup} />
              <Route exact path='/dashboard' component={MemeList} />
              <Route exact path='/addFriends' component={AddFriends} />
              <Route exact path="/question/:id" component={Dashboard}/>
              {/* <Route exact path="/question" component={Dashboard}/> */}
              <Route component={NoMatch} />
            </Switch>
          </Provider>
        </div>
      </Router>
      
    </ApolloProvider>
  );
}

export default App;