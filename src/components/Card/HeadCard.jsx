import React from 'react';
import SummaryGraph from "../Charts/SummaryGraph.jsx";
import './HeadCard.css';
const HeadCard= props=>{
    let classN=props.type;
    if(classN=='active')
    classN='active1';
    return <div className={`${classN} center col`}>
    <h5  className="title">{props.type}</h5>
    <h6 className={`new`}>+....</h6>
    <h4 className="curr">Total.....</h4>
    <SummaryGraph  data={props.data} type={props.type} />
    </div>;
};
export default HeadCard;