import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import './App.css';
import { Link } from 'react-router-dom'
import NavBar from './containers/NavBar'
import About from './pages/About'
import OrderPage from './pages/OrderPage'
import OrderHistory from './pages/OrderHistory'
import Contact from './pages/Contact'

function App() {
  return (
    
    <div className="App">
    
      <div class="ui segment">
        
        <Router>
          <NavBar />
          <Route exact path='/' render={(props) => <About {...props} />} />
          <Route exact path='/orderpage' render={(props) => <OrderPage {...props} />} />
          <Route exact path='/orderhistory' render={(props) => <OrderHistory {...props} />} />
          <Route exact path='/contact' render={(props) => <Contact {...props} />} />
        </Router>
      </div>
      
      <footer className = "footer">
        <p>Allen Shin</p>
      </footer>
    </div>
  );
}

export default App;
