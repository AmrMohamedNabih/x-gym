import { useState } from 'react'
import "./aboutUs.css"
import Service from '../../components/Service';

import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useCookies } from 'react-cookie';
import axios from 'axios';

function App() {
  
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const [count, setCount] = useState(0);
  
  
  return (
    <>
   
    <div className='body'>
     <div className="containers">
     <div className="contentt">
        <img src="logo.png" alt=""/>
        <div className="header" data-aos="fade-down">
          <h2>About us</h2>
          <p>XGym is a social networking site for people concerned about their health.</p>
        </div>
      <div className="vision" data-aos="fade-up">
        <h2>Vision</h2>
        <p>Improving athletic performance by making the person track improvement and putting him in a competitive environment to extract the best form from him.</p>
      </div>
      <div className="mission" data-aos="flip-right">
        <h2>Mission</h2>
        <p>The process of losing weight and tracking improvement for bodybuilders becomes easier by creating an application dedicated to them.</p>
      </div>
    </div> 
    <div>
    <Service/>
   </div>
    <div className="footer">
      <div className="footer-leftside">
          <img src="logo.png" alt=""/>
      </div>
      <div className="footer-rightside">
          <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">contact us</a></li>
              <li><a href="#">Privacy and Terms</a></li>
          </ul>
      </div>
  </div>
  
  </div>

  </div>
  
  </>
  )
}

export default App