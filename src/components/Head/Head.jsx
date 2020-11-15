import React from 'react';
import './Head.css'
import HeadCard from '../Card/HeadCard';
import {tn ,tnActive,tnRecovered} from '../../data/tndata';
const Head=props=>{
   
    const tnA={ 
    datasets: [
        {
          label: 'Active',
          fill: false,
          lineTension: 0.5,
          data: tnActive
        
        }
      ]
    };

    const tnR={ 
        datasets: [
            {
              label: 'Recovered',
              fill: false,
              lineTension: 0.5,
              data: tnRecovered
            }
          ]
        };
   console.log(tnActive);
    return <div className="box row container-fluid" id="row">
        
        <HeadCard key="Hcard2"  data={tnA} type="active"/>
        <div className="extra"></div>
        <HeadCard key="Hcard3" data={props.data3} type="total"/>
        <div className="extra"></div>
        <HeadCard key="Hcard4"  data={props.data4} type="deaths"/>
        <div className="extra"></div>
        <HeadCard key="Hcard5"  data={tnR} type="recovered" />
    </div>;
};
export default Head;
