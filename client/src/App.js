import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/index';
import Workout from './components/Workout/index';
import Help from './components/Help/index';
import News from './components/News/index';
import ErrorPage from './components/Error/index';
import Navbar from './components/Navbar/index';
import Signin from './components/Signin/index';
import Signup from './components/Signup/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/workout" component={Workout} />
            <Route exact path="/blogs/self-help" component={Help} />
            <Route exact path="/blogs/news" component={News} />
            <Route exact path="/blogs/something" component={Home} />
            <Route exact path="/signin" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/*" component={ErrorPage} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
