import React from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";
import theme from "./theme";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
