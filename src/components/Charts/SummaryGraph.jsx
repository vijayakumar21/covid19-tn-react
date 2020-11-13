import React  from 'react';
import {Line} from 'react-chartjs-2';

const SummaryGraph=props=>{
    const type=props.type;
   
    let border;
    if(type==="tested")   border="#72B1F0";
    
    else if(type==="active") border="#E04242";
    
    else if(type==="total")  border='#F6B237';
    
    else if(type ==="deaths") border='#CF91F2';
    
    else  {border='#82E3A1'; console.log(type);};
    
    // props.data.backgroundColor=bg;
    // props.data.borderColor:border
    // props.data.borderWidth:1.5
    
   const fedData=props.data;
   fedData.datasets[0].borderColor=border;
   fedData.datasets[0].borderWidth=1.5;
    const customization={
        elements: {
          point: {
            radius: 0
          }
    
        },
        responsive: true,
    
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
    
          yAxes: [{
    
            display: false,
           
          }]
    
        }
      };
    return <Line data={fedData} options={customization}/>;

};
export default SummaryGraph;