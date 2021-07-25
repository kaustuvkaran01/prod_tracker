import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import Profile from './pages/Profile';

import Navbar from './components/generic/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          {/* <Route exact="/news" component={News}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
