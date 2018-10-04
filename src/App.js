import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/layout/Navbar";
import Footer from './Components/layout/Footer';
import About from "./Components/pages/About";
import AddUser from './Components/pages/AddUser'
import EditUser from './Components/pages/EditUser'
import NotFound from './Components/pages/NotFound'
import Users from './Components/users/Users'

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <div className="App">
          <Navbar />
          <h1 className="text-center mt-5"><span className='text-danger'>User</span> Manager</h1>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Users}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/adduser" component={AddUser} />
              <Route exact path='/user/edit/:id' component={EditUser}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
