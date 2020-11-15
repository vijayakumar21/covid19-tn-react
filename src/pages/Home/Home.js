import React from 'react';
import FadeIn from 'react-fade-in';
import Middle from '../../components/Card/Middle';
import Head from '../../components/Head/Head';
import BottomCard from '../../components/Card/BottomCard';
import './Home.css'
const Home=(props)=>{
  const theme=props.theme;
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            data: [65, 59, 80, 81, 56]
          }
        ]
      };
      const state2 = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            data: [105, 69, 12,200, 100]
          }
        ]
      };
      const state3 = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            data: [109, 69, 12,200, 800]
          }
        ]
      };
      const state4 = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            data: [129, 78, 52,210, 800]
          }
        ]
      };
      const state5 = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
           
            data: [134, 88, 82,10, 90]
          }
        ]
      };
      
     
    return <FadeIn>
    
    <Head data1={state} data2={state2} data3={state3} data4={state4} data5={state5}/>
    <Middle data={[88, 82,10]}/>
    <BottomCard/>
    </FadeIn> ;
    
};
export default Home;