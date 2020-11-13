import React from 'react';
import './Head.css'
import HeadCard from '../Card/HeadCard';
const Head=props=>{
   
    return <div className="box row container-fluid" id="row">
        
        <HeadCard key="Hcard2"  data={props.data2} type="active"/>
        <div className="extra"></div>
        <HeadCard key="Hcard3" data={props.data3} type="total"/>
        <div className="extra"></div>
        <HeadCard key="Hcard4"  data={props.data4} type="deaths"/>
        <div className="extra"></div>
        <HeadCard key="Hcard5"  data={props.data5} type="recovered" />
    </div>;
};
export default Head;
