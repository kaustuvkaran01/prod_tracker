import React from 'react';

// import {useSelector, useDispatch} from 'react-redux';
// import {increment,decrement} from './store/actions/userTasks';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Home from './components/Home/index';
import Workout from './components/Workout/index';
import Help from './components/Help/index';
import News from './components/News/index';
// import ErrorPage from './components/Error/index';
import Navbar from './components/Navbar/index';
// import Signin from './components/auth/Signin/index';
// import Signup from './components/auth/Signup/index';
import history from './services/history';
// import Auth from './components/auth/Auth';

function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <Route path="/signin" component = {Signin} /> */}
            {/* <Route path="/auth" component={Auth} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/workout" component={Workout} />
            <Route exact path="/self-help" component={Help} />
            <Route exact path="/news" component={News} />
            <Route exact path="/something" component={Home} />
            {/* <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} /> */}
            {/* <Redirect to="/auth" from="*" /> */}
            {/* <Route exact path="/*" component={ErrorPage} /> */}
          </Switch>
        </div>
      </Router>
    );
}
// import React from 'react';
// import { Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { history } from './store/helpers/history';
// import { alertActions } from './store/actions/alertActions';
// import { PrivateRoute } from './components/PrivateRoute';
// import { HomePage } from './components/HomePage/HomePage';
// import { LoginPage } from './components/LoginPage/LoginPage';


// class App extends React.Component {
//   constructor(props) {
//       // super(props);

//       const { dispatch } = this.props;
//       history.listen((location, action) => {
//           // clear alert on location change
//           dispatch(alertActions.clear());
//       });
//   }

//   render() {
//       const { alert } = this.props;
//       return (
//           <div className="jumbotron">
//               <div className="container">
//                   <div className="col-sm-8 col-sm-offset-2">
//                       {alert.message &&
//                           <div className={`alert ${alert.type}`}>{alert.message}</div>
//                       }
//                       <Router history={history}>
//                           <div>
//                               <PrivateRoute exact path="/" component={HomePage} />
//                               <Route path="/login" component={LoginPage} />
//                           </div>
//                       </Router>
//                   </div>
//               </div>
//           </div>
//       );
//   }
// }

// function mapStateToProps(state) {
//   const { alert } = state;
//   return {
//       alert
//   };
// }

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App };


export default App;
