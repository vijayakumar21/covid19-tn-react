import React,{useContext}from 'react'
import DoughnutChart from '../Charts/DoughnutChart';
import { chartColors, chartColors2} from "../colors/colors";
import PercentageChart from '../Charts/PercentageChart';
import TNmap from '../../components/map/TNmap'
import {ThemeVar} from '../../ThemeSelect.js';
import './middle.css'

const Middle=props=>{
  const [globalTheme,]=useContext(ThemeVar);
  let middleTheme="";
    const data = {
        maintainAspectRatio: true,
        responsive:true,
        labels: ["active", "Recovered", "Deaths"],
        datasets: [
          {
            data:props.data,
            backgroundColor: chartColors,
            
            
          }
        ],
        config:{
         animateScale:true
        },text:""
      };
      if(globalTheme==='dark')
      middleTheme="dark-middle";
      return <div id="middle" className="row middle-card container-fluid" >
      <div className="col-sm-6" >
      <h3 className={`place-name ${middleTheme}`}>Tamil Nadu</h3>
      <TNmap/>
      </div>
      <div className="doughnut col-sm-6">
      <h4 className={`overview-title ${middleTheme}`}>Overview</h4>
      <DoughnutChart  data={data}/>
      <div className='row percent-row'>
        <div className="col"> <PercentageChart key="per-1" type="Active" percent={30}/>  </div>
        <div className="col"><PercentageChart  key="per-2"  type="Deaths" percent={3}/> </div>
        <div className="col"><PercentageChart key="per-3" type="Recovered" percent={67} /> </div>
      </div>
      </div>
      
      </div>
}
export default Middle;
// [300, 50, 100, 50]