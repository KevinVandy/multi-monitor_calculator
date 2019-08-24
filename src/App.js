import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SetupState from './context/setup/SetupState';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './css/rapidstrap.css';
import './css/mmc.css';

const App = () => {
  return (
    <SetupState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </SetupState>
  );
}

export default App;
