import NavBar from '../../components/NavBar/NavBar'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Data from '../../data/User.json';
import './Exercises.css'
import Content from '../../components/content/Content';
import {easeInOut, motion as m} from 'framer-motion'
import { useCookies } from 'react-cookie';
export default function Exercises() {
  const [cookies] = useCookies(['Email',"Id"]);
  const isAuthenticated = cookies.Email;
  const isID = cookies.Id;
const location = useLocation();
const [numContent , setnumContent] = useState(0);
const [selectedItem , setselectedItem] = useState(0);
const List = [
  { id:1,img:"/images/exercisesImg/chest.png",name:"Chest"},
  { id:2,img:"/images/exercisesImg/arm.png",name:"Arm"},
  { id:3,img:"/images/exercisesImg/core.png",name:"Core"},
  { id:4,img:"/images/exercisesImg/shoulders.png",name:"Shoulders"},
  { id:5,img:"/images/exercisesImg/back.png",name:"Back"},
  { id:6,img:"/images/exercisesImg/leg.png",name:"Leg"},
]
const handleClick=(s) => {
  setnumContent(s);
  setselectedItem(s);

};
console.log(isAuthenticated);
console.log(isID);

  return (
    <>
    <m.div className="ePage" initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 ,ease:easeInOut}}>
      <div className="leftSide">
       <div className="card">
       <ul>
        {List.map((item,idx)=>(
          <li onClick={()=>handleClick(idx)} className={idx === selectedItem ?"listActive":"list"}><img src={item.img} alt=""/><span>{item.name}</span></li>
        ))}
        </ul>
       </div>
      </div>
      <div className="rightSide"><Content num={numContent}/></div>
    </m.div>
    </>
  )
}
