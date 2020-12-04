import React, { Component } from 'react';
import './App.css';
import { Switch, Route, HashRouter as Router, Redirect } from 'react-router-dom';
import Home from './components/Home/index';
import Workout from './components/Workout/index';
import Help from './components/Help/index';
import News from './components/News/index';
import ErrorPage from './components/Error/index';
import Navbar from './components/Navbar/index';
import Signin from './components/auth/Signin/index';
import Signup from './components/auth/Signup/index';
import history from './services/history';
import Auth from './components/auth/Auth';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/workout" component={Workout} />
            <Route exact path="/self-help" component={Help} />
            <Route exact path="/news" component={News} />
            <Route exact path="/something" component={Home} />
            {/* <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} /> */}
            <Redirect to="/auth" from="*" />
            {/* <Route exact path="/*" component={ErrorPage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
