import React ,{useContext}from 'react';
import {Button,Accordion,Card} from 'react-bootstrap';
import {ThemeVar} from '../../ThemeSelect.js'
import './FAQ.css';
const FAQ =props=>{
    let themeClass="light-faq"
    const [globalTheme,]=useContext(ThemeVar);
    if(globalTheme=='dark')
    themeClass="dark-faq";
    else
    themeClass="light-faq";
    return <div className={`question ${themeClass}-question`}><Accordion defaultActiveKey="1">
    <Card className={themeClass}>
      <Card.Header  >
        <Accordion.Toggle as={Button} variant="text" eventKey="0">
           <h6 className="faq-title">{props.question}</h6>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body ><p className="answer">{props.answer}</p> </Card.Body>
      </Accordion.Collapse>
    </Card>
    
  </Accordion></div>;
};
export default  FAQ;