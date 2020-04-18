import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Workshops from './components/Workshops'
import AboutFHS from './components/About_Fhs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
    navBarLinks: 16,
    h1: {
      fontWeight: 500,
      fontSize: 45
    },
    h2: {
      fontWeight: 500,
      fontSize: 36
    },
    h3: {
      fontWeight: 400,
      fontSize: 28
    },
    body1: {
     fontWeight: 300,
     fontSize: 18 
    }
  },
  palette: {
    primary: {
      main: `#ffa199`,
      light: `#ffd3ca`,
      dark: `#c9716b`,
      contrastText: `#0c0c0c`
    },
    secondary: {
      main: '#d3a13b',
      light: `#ffd26b`,
      dark: `#9e7300`,
      contrastText: `#000000`
    },
    info: {
      main: `#b0dfe5`
    },
    success: {
      main: `#4caf50`
    }
  }
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/"component={Home} />
        <Route exact path="/about"component={About} />
        <Route exact path="/workshops"component={Workshops} />
        <Route exact path="/contact-fhs"component={Contact} />
        <Route exact path="/about-fhs"component={AboutFHS} />
      </Switch>
    <Footer />
    </Router>
     </MuiThemeProvider>
  );
}

export default App;
