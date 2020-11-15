
import './App.css';
import './pages/Home/Home'
import React , {useContext} from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';
import NavBar from './components/Navigation/NavBar.jsx';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import About from './pages/about/about';
import FadeIn from 'react-fade-in';
import {ThemeVar} from './ThemeSelect.js';
function App() {
  const [globalTheme,]=useContext(ThemeVar);
  const pageRoot=document.getElementById("body")
  if(globalTheme==='dark')
  pageRoot.classList.add('dark-page');
  else
  pageRoot.classList.remove('dark-page');

  return (
    <FadeIn>
   
    <Router>
    <NavBar  />
    <main>
    <Switch>
    
    <Route path="/" exact>
    <Home />
    </Route>
    <Route path="/about" exact>
      <About />
    </Route>
    <Route path="/faq" exact>
  
    <Faq />
 
      
    </Route>
    <Redirect to="/" exact />
    </Switch>
    </main>
    

    </Router>
    
    </FadeIn>
    
  );
}

export default App;
