import React from 'react';
import '../src/styles/themes/theme.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Post from './pages/post'

function RootWrapper({children}) {
  return (
    <div className="main-container">
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <RootWrapper>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/post/:slug" component={Post} />
          </Switch>
          <Footer/>
        </RootWrapper>
      </Router>
    </div>
  );
}

export default App;
