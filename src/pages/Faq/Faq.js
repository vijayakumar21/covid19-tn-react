import React from 'react';
import FadeIn from 'react-fade-in';
import FAQ from '../../components/Faq/FAQ.jsx'
import './faq.css';
import {qna} from './questions-answers';
const Faq=()=>{
    return <FadeIn><div class="faq-page"> 
    <h3>Frequently Asked Questions (FAQs)</h3>
    {qna.map((elt)=> <FAQ question ={elt.question} answer={elt.answer}   />)}
    </div></FadeIn>
};
export default Faq;