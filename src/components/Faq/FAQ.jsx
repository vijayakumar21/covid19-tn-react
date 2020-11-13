import React from 'react';
import {Button,Accordion,Card} from 'react-bootstrap';
import './FAQ.css';
const FAQ =props=>{
    const classN="";

    return <div class='question'><Accordion defaultActiveKey="1">
    <Card>
      <Card.Header >
        <Accordion.Toggle as={Button} variant="text" eventKey="0">
           <h6 class="faq-title">{props.question}</h6>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body ><p class="answer">{props.answer}</p> </Card.Body>
      </Accordion.Collapse>
    </Card>
    
  </Accordion></div>;
};
export default  FAQ;