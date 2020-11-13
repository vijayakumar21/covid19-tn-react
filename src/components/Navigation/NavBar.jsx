import React ,{useState}from 'react'
import {Navbar,Nav,NavItem } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './NavBar.css';
const NavBar=(props)=>{
  const [theme,setTheme]=useState("fas fa-sun");
  const handleThemeChange=(event)=>{
    if(theme==="fas fa-sun"){
    setTheme("fas fa-moon");
    props.themeFunction('dark');
    }
    else{
      setTheme("fas fa-sun");
      props.themeFunction('dark');
    }
    console.log(theme);
  }
  let back,color;
  if(theme=='fas fa-sun')
  {
    back='primary'
    color='dark'
  }
  else{
    back='dark';
    color='dark';
  }
    return(
    <Navbar collapseOnSelect expand="lg" bg={back} variant={color}>
  <Navbar.Brand className="mr-auto" to="/" as={NavLink}  exact>Covid-19 TN</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end" style={{ width: "100%" }}>
   <Nav.Link activeClassName="active" to="/" as={NavLink} exact>Home</Nav.Link>
    
   <Nav.Link activeClassName="active" to="/about" as={NavLink} exact>About</Nav.Link>
   <Nav.Link activeClassName="active" to="/faq" as={NavLink} exact>FAQs</Nav.Link>
      <Nav.Link onClick={handleThemeChange}><i className={theme}></i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>);
};
export default NavBar;