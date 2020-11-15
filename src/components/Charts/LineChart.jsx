import React from 'react';
import {Line}from 'react-chartjs-2';
import './LineChart.css';

const LineChart= props=>{
    const type=props.type;
    let radiusColor, ticsColor,gridColor, borderColor;
    if(type==='Total')
    {
        radiusColor='#EB9734';
        ticsColor="#FEC076";
        gridColor='#F8AF5A'
        borderColor='#EB9734'
    }
    else if(type==='Active')
    {
        ticsColor="#D17070";
        gridColor='#F14242';
        borderColor='#D85656';
        radiusColor='#F14242';
    }
    else if(type=='Deaths')
    {
        ticsColor="#DB99FF";
        gridColor='#C781ED';
        borderColor='#CA6CFE';
        radiusColor='#CA6CFE';
    }
    else{
        ticsColor="#A3F0BC";
        gridColor='#82E3A1';
        borderColor='#62D387';
        radiusColor='#62D387';
    }
    const data=props.data;
    data.datasets[0].borderColor=borderColor;
    const options={
          title: {
               display: true,
               text: `${props.type} Cases`
           },
          elements: {
            point: {
              radius: 2,
              
            },
            line: {
          cubicInterpolationMode: 'linear'
        }
    
          },
          responsive: true,
    
    
          legend: {
            display: false
          },
          scales: {
            xAxes: [{  ticks: {
                fontColor: ticsColor,stepSize:10
              },
              gridLines: {
              lineWidth:1.5,
                color:gridColor,drawOnChartArea:false
    
              }
    
            }],
    
            yAxes: [{
              ticks: {
                fontColor: ticsColor
              },
    
              gridLines: {
    
                lineWidth:1.5,
                color:gridColor,drawOnChartArea:false
    
              }
    
            }]
    
          }
        };
       

        return <div className={`${type}-line`} id="line-chart"> <Line data={data} options={options} width={285} height={100} /></div>
    }
export default LineChart;