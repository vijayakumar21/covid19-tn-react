import React ,{useContext}from 'react';
import FadeIn from 'react-fade-in';
import {ThemeVar} from '../../ThemeSelect.js';
import './about.css';

const About=()=>{
    const [globalTheme,]=useContext(ThemeVar);
    let aboutTheme="";
    if(globalTheme=='dark')
    aboutTheme='about-dark';
return <FadeIn><div className={`about-page`}>
<h4 className={`about-project ${aboutTheme}`}>About the project</h4>
<h4 className="btm">Our project's aim is to organise the covid information and make it minimal and easier to visualize</h4>
<h4 className="btm">We have also optimised the site for both mobile and desktop/laptop viewports</h4>
<h4 className="qn">What is our source?</h4>
<h4 className="ans">Data is collected from opensource API of  <a href="https://covid19india.org">covid19india.org</a> which is being operated by volunteers. </h4>
<h4 className="qn">What is the need of this project ?</h4>
<h4 className="ans">Our project acts as a portal for the public to keep track of the latest news development about the COVID-19, alongside collecting data for further analysis. All the contents are handpicked, filtered, and acurated to our best extent to ensure that sources are reliable with minimal hoaxes and fake news, in the best benefit of the public.</h4>
<h4 className="qn">What are the technologies used in this project?</h4>
<h4 className="ans">We have used facebook's React library for the frontend ( this is a single page application ) , chartJS was used for visualising using graphs and CSSTransition package for animations and transitions.</h4>
<h4 className="qn">A project by,</h4>
<h4 className="ans"> Vijayakumar.L.G, Yuvahari.J,  Venkata Sai Tharun.P, Sabari.S </h4>
</div></FadeIn>
};
export default About;