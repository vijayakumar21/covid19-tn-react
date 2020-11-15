import React ,{useState} from 'react';
import  LineChart from '../../components/Charts/LineChart';
import './BottomCard.css';
import {Dropdown} from 'react-bootstrap';
const  BottomCard=props=>{
    const [pressed,setPress]=useState('Tamil Nadu');
    const handleListClick=(event)=>{
       
        setPress(event.target.innerHTML);
    }
    const districts = ['Tamil Nadu', 'Tiruppur', 'Ranipet', 'Ramanathapuram', 'Karur', 'Coimbatore', 'Chennai', 'Erode', 'Ariyalur', 'Chengalpattu', 'Viluppuram', 'Tiruvannamalai', 'Nagapattinam', 'Tenkasi', 'Namakkal', 'Theni', 'Kanyakumari', 'Dharmapuri', 'Thoothukkudi', 'Perambalur', 'Tirupathur', 'Cuddalore', 'Vellore', 'Kancheepuram', 'Thiruvallur', 'Nilgiris', 'Dindigul', 'Madurai', 'Tirunelveli', 'Sivaganga', 'Pudukkottai', 'Thiruvarur', 'Krishnagiri', 'Tiruchirappalli', 'Virudhunagar', 'Salem', 'Thanjavur', 'Kallakurichi', 'Airport Quarantine', 'Other State', 'Railway Quarantine'];
    const state5 = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            
            fill: false,
            borderWidth: 2,
           
            data: [134, 88, 82,120, 90]
          }
        ]
      };
      const state6 = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            
            fill: false,
            borderWidth: 2,
           
            data: [134, 38, 822,110, 90]
          }
        ]
      };
      const state7 = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            
            fill: false,
            borderWidth: 2,
           
            data: [34, 822, 82,10, 90]
          }
        ]
      };
      const state8 = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            
            fill: false,
            borderWidth: 2,
           
            data: [131, 28, 22,10, 90]
          }
        ]
      };

    return <div className="bottom">
    <div className="dropdown-cust"><Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    {pressed}
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {districts.map((elt,pos)=><Dropdown.Item onClick={handleListClick} key={pos}>{elt}</Dropdown.Item>)}
  </Dropdown.Menu>
</Dropdown> </div>
    <LineChart type="Total" data={state5}/>
    
    <LineChart type="Active" data={state6}/>
    <LineChart type="Deaths" data={state7}/>
    <LineChart type="Recovered" data={state8}/>
    </div>;
}
export default BottomCard;
