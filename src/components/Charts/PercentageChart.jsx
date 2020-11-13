import React from "react";

import { Doughnut, Chart } from "react-chartjs-2";
import './PercentageChart.css'



export default function Chart_Donught(props) {


    const typeOfChart=props.type;
    let colorType;
    if(typeOfChart==='Active') colorType="rgba(254, 113, 113, 0.65)";
    else if(typeOfChart==='Deaths')  colorType="rgba(195, 174, 214, 0.65)";
    else  colorType="rgba(168, 221, 168, 0.65)";

    const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function () {
    originalDoughnutDraw.apply(this, arguments);
    const chart = this.chart;
    const width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;
      
    const fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    
    ctx.fillStyle ="#968c83";
    
    ctx.textBaseline = "middle";
    const text = chart.config.data.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2)==undefined? 0: Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});


   
    

  const chartData = [props.percent, 100-props.percent];
const showData = chartData[0] + "%";
const data1 = {
  datasets: [
    {
      data: chartData,
      backgroundColor: [colorType, "rgba(232, 232, 232, 0.23)"],
      borderColor:'transparent'
    }
  ],
  showTooltips: false,
  text: showData
};
  const options1 = {
    responsive: true,
    tooltips: false,
    legend: {
      display: false,
      position: "bottom",
      labels: {
        fontSize: 12,
        
        fontFamily: "kanit light"
      }
    }
  };
  return (
    <div className={`${typeOfChart}-percent percent-chart`}>
      <Doughnut data={data1} options={options1} height={250} />
      <h3 style={{textAlign:'center'}}>{props.type}</h3>
    </div>
  );
}
