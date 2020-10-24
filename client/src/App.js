import React from 'react'; 
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import Home from './components/Home/index';     
import Workout from './components/Workout/index'; 
import Help from './components/Help/index'; 
import News from './components/News/index'; 
// import NavbarComponent from './components/Navbar/index';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/workout" component={Workout} />
        <Route path="/blogs/self-help" component={Help} />
        <Route path="/blogs/news" component={News} />
        <Route path="/blogs/something" component={Home} />
      </Switch>
  );
}

export default App;
