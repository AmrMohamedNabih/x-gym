import React, { useEffect, useState } from 'react'
import "./LeftSide2.css"
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function LeftSide2({FirstName,LastName,points,id}) {
   
    const image = [];
    const  [Imges,setImges] = useState([]);
    const [followButtonColor, setFollowButtonColor] = useState('rgba(0, 100, 155, 1.5)');
    const [isFollowed, setIsFollowed] = useState(false);
    const [value,setValue]= useState("follow");
    const [cookies] = useCookies(['Id']);
    const isAuthenticated = cookies.Id;
    const handleFollowClick = () => {
        
        if (isFollowed === false) {
            console.log('el3woo');
            
            setFollowButtonColor('#a0beed');
            setValue("UnFollow");
            var Data = {
                id: isAuthenticated,
                userid: id,
                username:(FirstName + " "+ LastName),
               
            }
            axios.post("http://localhost/makeFollow/", { Data: Data }).then(function (response) {
      console.log(response.data);
      })
      .catch(function (error) {
          console.error("Error in Axios POST request", error);
      });
            setIsFollowed(true);
          } else {
            var Data = {
                id: isAuthenticated,
                userid: id,
                username:(FirstName + " "+ LastName),
               
            }
            axios.post("http://localhost/deleteFollower/", { Data: Data }).then(function (response) {
      console.log(response.data);
      })
      .catch(function (error) {
          console.error("Error in Axios POST request", error);
      });
            setValue("Follow");
            setFollowButtonColor('rgba(0, 100, 155, 1.5)');
            setIsFollowed(false);
          }
      
        };
        
        useEffect(()=>{
            fetchDataId();
            },[]);
            const fetchDataId = async () => {
                try {
                    const response = await axios.get('http://localhost/getImges/', {
                    params: {
                        searchValue: id,
                    },
                    });
                    setImges(response.data);
                    
                    
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
                try {
                    const response = await axios.get('http://localhost/getFollowers/', {
                    params: {
                        searchValue: isAuthenticated,
                    },
                    });
                    for(let i =0;i<response.data.length;i++)
                    {
                        if(response.data[0].userId == isAuthenticated && response.data[0].followId == id)
                        {
                            setIsFollowed(true);
                        }

                    }
                    
                    
                } catch (error) {
                    console.error('Error fetching data:', error);
                }

                
            }
            for(let i = 0; i < Imges.length; i++)
        {
            image.push(Imges[i].image);
            console.log(image);
        }
        useEffect(()=>{
            console.log(id);
            if(isFollowed === false)
            {
                setValue("Follow");
                setFollowButtonColor('rgba(0, 100, 155, 1.5)');   
            }else{
                setValue("UnFollow");
                setFollowButtonColor('#a0beed');
            }
        },[id]);
        if(image.length)
        {
            
            return (
                <div className="left-side">
                    <div className="first-container-left">
                        <div className="fc-left">
                            <img src={image[0]} alt=""/>
                        </div>
            
                        <div className="fc-right">
                            <div className="fc-right-name">
                                <p >{FirstName} {LastName}</p>
                            </div>
                            <div className="fc-right-rank">
                                {/* <p>rank #{rank} on Friends</p> */}
                            </div>
                            <div className="fc-right-track-points">
                                {/* <p>{dayOnTrack} day on Track</p> */}
                                <p>{points} points</p>
                            </div>
                            <div className="fc-right-input">
                                <input className="follow" type="button" value={value}    style={{ background: followButtonColor }}
                      onClick={handleFollowClick}/>
                            </div>
                        </div>
                    </div>
                    <div className="second-container-left">
                        <div className="sc-img">
                        {image.map((photo) => <img src={photo} alt=""/>)}
                        </div>
                    </div>
                </div>
                )
        }else{
            return (
                <div className="left-side">
                    <div className="first-container-left">
                        <div className="fc-left">
                            <img className='sc-img-no' alt=""/>
                        </div>
            
                        <div className="fc-right">
                            <div className="fc-right-name">
                                <p >{FirstName} {LastName}</p>
                            </div>
                            <div className="fc-right-rank">
                                {/* <p>rank #{rank} on Friends</p> */}
                            </div>
                            <div className="fc-right-track-points">
                                {/* <p>{dayOnTrack} day on Track</p> */}
                                <p>{points} points</p>
                            </div>
                            <div className="fc-right-input">
                                <input className="follow" type="button" value={value}    style={{ background: followButtonColor }}
                      onClick={handleFollowClick}/>
                            </div>
                        </div>
                    </div>
                    <div className="second-container-left">
                        <div className="sc-img-no">
                        </div>
                    </div>
                </div>
                )
        }


    
}