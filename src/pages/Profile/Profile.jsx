import LeftSide from '../../components/LeftSide/LeftSide';
import Data from '../../data/User.json';
import RightSide from '../../components/RightSide/RightSide';
import './profile.css'
import {easeInOut, motion as m} from 'framer-motion'
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {exercise} from '../../data/ex';
import Footer from '../../components/store/footer';
export default  function Profile() {
    
      // if(loading) {
      //   return<Spinner animation="border" role="status">
      //   <span className="visually-hidden">Loading...</span>
      // </Spinner>;
      // }else{
        // useEffect(()=>{
        //   console.log("Loading...");
        //   },[loading])
        const [cookies] = useCookies(["Id"]);
        const isAuthenticatedId = cookies.Id;
        const  [Data,setData] = useState({});
        const  [FirstName,setFirstName] = useState("");
        const  [LastName,setLastName] = useState("");
        const  [Exercise,setExercise] = useState([]);
        const  [Points,setPoints] = useState(0);
        const  [loading,setLoading] = useState(true);
        const fetchDataId = async () => {
            try {
                const response = await axios.get('http://localhost/getDateFromId/', {
                params: {
                    searchValue: isAuthenticatedId,
                },
                });
                setFirstName(response.data[0].FirstName);
                setLastName(response.data[0].LastName);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            try {
              const response = await axios.get('http://localhost/getExercisesById/', {
                  params: {
                  searchValue: isAuthenticatedId,
                  },
              });
              setExercise(response.data);
              for(let i = 0; i < Exercise.length; i++)
              {
                exercise.push(Exercise[i]);
              }
              let sum =0;
              for (let i = 0; i < response.data.length; i++) {
                sum +=parseFloat(response.data[i].points);
              }
              setPoints(sum);
              console.log(sum);//
              setLoading(false);
              } catch (error) {
              console.log('Error fetching data:', error);
              }
            };
        useEffect(()=>{
          fetchDataId();
          },[]);
          if(!loading)
          {
            console.log("lalal",exercise);
            return (
              <div className="content">
                <LeftSide  FirstName={FirstName} LastName={LastName}
                 points={Points} ></LeftSide>
                <RightSide Exercises = {Exercise}></RightSide>
                <br></br>
                {/* <Footer></Footer>/ */}
              </div>
            )
          }
        
      }
// }
