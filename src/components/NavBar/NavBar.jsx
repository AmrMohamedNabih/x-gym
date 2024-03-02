import React from 'react'
import "./NavBar.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  

  const handleSearch = async (e) => {
    if (e !== "") {
      setSearchValue(e);
      try {
        const response = await axios.get('http://localhost/search/', {
          params: {
            searchValue: searchValue,
          },
        });
        setSearchResult(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      setSearchValue(e);
      setSearchResult([]);
    }


  };
  const navigate = useNavigate();
  const transfer =async (user)=> {
    try {
      const response = await axios.get('http://localhost/getExercisesById/', {
          params: {
          searchValue: user.UserID,
          },
      });
      let sum =0;
      let exe = response.data;
      console.log("es" ,exe);
      for (let i = 0; i < response.data.length; i++) {
        sum +=parseFloat(response.data[i].points);
      }
      if(response.data.length && sum)
      {
        setSearchResult([]);
        navigate('/FriendPage', { state: { user , sum ,exe} });
      }else if (!response.data.length){
        setSearchResult([]);
        navigate('/FriendPage', { state: { user , sum ,exe} });
      }
      
    }catch(e){}

    
    

  };
  return (
    <>
      <nav>
        <a href="/exercises" className="logo"><img src='/images/logo.png' alt="logo" /></a>


        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search" />
          {searchResult.length > 0 && (
            <div className="search-box-results">
              <ul>
                {/*  */}
                {searchResult.map((user) => (
               <div className='li' onClick={()=>transfer(user)}>   <li key={user.UserID}> 
                    {user.FirstName} {user.LastName} # {user.UserName}
                 </li></div> 

                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="nav-center">
          <ul>
            <li><a href="/Profile" ><img src="/images/profile-icon.gif" alt="" /><span>profile</span></a></li>
            <li><a href="/Store"><img src="/images/store-icon.png" alt="" /><span>store</span></a></li>
            <li><a href="/exercises"><img src="/images/exercises.png" alt="" /><span>Exercises</span></a></li>
          </ul>
        </div>

        <div className="nav-right">
          <a href='/Profile'><img src={props.UserImg} alt="" className="nav-profile-img" /></a>
        </div>
      </nav>
      <div className="nav-end-in-599px">
        <ul>
          <li><a href="#"><img src="/assets/image/profile-icon.gif" alt="" /><span>profile</span></a></li>
          <li><a href="store.html"><img src="/assets/image/store-icon.png" alt="" /><span>store</span></a></li>
          <li><a href="exerciese.html"><img src="/assets/image/exercises.png" alt="" /><span>exercises</span></a></li>
        </ul>
      </div>
    </>
  )
}