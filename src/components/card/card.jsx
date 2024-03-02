import React, { useEffect, useRef, useState } from 'react'
import './card.css'
import { useCookies } from 'react-cookie';
import axios from 'axios';
export default function card({change}) {
  const inputElement = useRef();
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  // console.log(typeof(formattedDate));
  const [cookies] = useCookies(['Id']);
  const isAuthenticated = cookies.Id;
  useEffect(()=>{
    setSets(0);
    setWeight("");
    setRaps("");
    setRest('');
    setI(0);
  },[change]);
  const [weight,setWeight]=useState("");
  const [raps,setRaps]=useState("");
  const [Sets, setSets] = useState(0);
  const [rest, setRest] = useState("");
  const [i ,setI]=useState(0);
const display = () => {
        return (
        <div className='Display'>
            <p>{i}</p>
            <input  value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="Weight" type="number" className='Num'></input>
            <input  value={raps} onChange={(e)=>setRaps(e.target.value)} placeholder="Raps" type="number" className='Num' style={{
            // @ts-ignore
            "margin-left": "10px"}}></input>
        </div>
        )
    }
const add=(i) => {
    if(i <= Sets&&  Sets&&weight!="" && raps!="")
    {
      var Data = {
        id: isAuthenticated,
        category: change,
        date:formattedDate,
        weight:weight,
        reps:raps,
        points:parseFloat(weight)*parseFloat(raps)
    }
    axios.post("http://localhost/exercises/", { Data: Data }).then(function (response) {
      console.log(response.data);
      })
      .catch(function (error) {
          console.error("Error in Axios POST request", error);
      });
    setWeight("");
      setRaps("");
      if(i != Sets)
      {
        setI(i+1);

      }else{
        setI(0);
      setSets(0);
      setWeight("");
      setRaps("");
      }
    }else{
      setI(0);
      setSets(0);
      setWeight("");
      setRaps("");
    }
}
  const handleChange = (event) => {
    setSets(event.target.value);
    setRest(event.target.value);
  };
  
  const handleCreate = () => {
    if(i === 0)
    {
      setRest("");
      setI(i+1);
    }
  };
  return (
    <>
    <div className="leftSide-content">
        <input className='Num'
        placeholder="Enter Number of sets"
        type="number"
        onChange={handleChange}
        value={rest}/>
            <button onClick={()=>handleCreate()}>Create</button>
        </div>

        <div className="middelSide-content">{display()}</div>
        <div className="rightSide-content">
            <button onClick={()=>add(i)}>add</button>
        </div>
        </>
  )
}
