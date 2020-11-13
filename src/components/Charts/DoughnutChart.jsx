import React from 'react';
import { Doughnut,Pie} from 'react-chartjs-2';
import './DoughnutChart.css';
import {borderColors} from '../colors/colors'

const DoughnutChart= props=>{
    const options = {
        legend: {
          display: false,
          position: "bottom",
          align:"end",
          labels: {
            padding: 30
          }
        },
        elements: {
          arc: {
            borderWidth: 1.15,
            borderColor:borderColors
          }
        },
      };
      
    
    return <div className="doughnut">
    <Pie data={props.data}  options={options}/>

    </div>;
};
export default DoughnutChart;