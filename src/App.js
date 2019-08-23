import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './css/rapidstrap.css';
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
