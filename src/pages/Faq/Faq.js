import React ,{useContext}from 'react';
import FadeIn from 'react-fade-in';
import FAQ from '../../components/Faq/FAQ.jsx'
import './faq.css';
import {ThemeVar} from '../../ThemeSelect.js'
import {qna} from './questions-answers';
const Faq=()=>{
    const [globalTheme,]=useContext(ThemeVar);
   let faqTheme='light-faq';
    if(globalTheme=='light')
    faqTheme='light-faq';
    else
    faqTheme='dark-faq';
    return <FadeIn><div className= {`faq-page ${faqTheme}`}> 
    <h3>Frequently Asked Questions (FAQs)</h3>
    {qna.map((elt,pos)=> <FAQ question ={elt.question} answer={elt.answer} key={`${pos}-faq`}  />)}
    </div></FadeIn>
};
export default Faq;