import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from "./components/Header.js";
import Table from "./components/Table.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path='/'>
            <Header/>
            <div className="xcontainer">
            <Table/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
