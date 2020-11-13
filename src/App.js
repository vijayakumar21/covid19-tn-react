import logo from './logo.svg';
import './App.css';
import './pages/Home/Home'
import React , {useState} from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import NavBar from './components/Navigation/NavBar.jsx';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import About from './pages/about/about';
import FadeIn from 'react-fade-in';
function App() {
  const [applicationTheme, setTheme]=useState('light');
  const changeTheme=(theme)=>{
    setTheme(theme);
  }
  return (
    <FadeIn>
    <Router>
    <NavBar  themeFunction={changeTheme}/>
    <main>
    <Switch>
    
    <Route path="/" exact>
    <Home theme={applicationTheme}/>
    </Route>
    <Route path="/about" exact>
      <About theme={applicationTheme}/>
    </Route>
    <Route path="/faq" exact>
  
    <Faq theme={applicationTheme}/>
 
      
    </Route>
    <Redirect to="/" exact />
    </Switch>
    </main>
    

    </Router>
    </FadeIn>
    
  );
}

export default App;
