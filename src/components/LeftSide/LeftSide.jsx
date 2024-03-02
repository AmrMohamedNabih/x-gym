'props client';
import React, { useEffect, useState } from 'react'
import "./LeftSide.css"
import { useCookies } from 'react-cookie';
import axios from 'axios';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "../../firebase";
  import { v4 } from "uuid";

export default function LeftSide({FirstName,LastName,points}) {
    const image = [];
    const [cookies] = useCookies(['Id']);
    const  [Imges,setImges] = useState([]);
    const  [uFirstName,setuFirstName] = useState("");
    const  [uLastName,setuLastName] = useState("");
  const isAuthenticated = cookies.Id;

  useEffect(()=>{
    fetchDataId();
    },[]);
    const fetchDataId = async () => {
        try {
            const response = await axios.get('http://localhost/getImges/', {
            params: {
                searchValue: isAuthenticated,
            },
            });
            setImges(response.data);
            
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const [statics,setstatics] =useState(false);
    const handleEdite =()=>{
        statics === true ?setstatics(false) :setstatics(true);
    };
    const [imageUpload, setImageUpload] = useState(null);
    const UpdateName = () => {
        if (uFirstName == "" ||uLastName == "") return;
       
            var Data = {
                id: isAuthenticated,
                firstName: uFirstName,
                lastName: uLastName,
            }
            axios.post("http://localhost/updateName/", { Data: Data }).then(function (response) {
              })
              .catch(function (error) {
                  console.error("Error in Axios POST request", error);
              });
          alert("Name Updated");
      };
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            getDownloadURL(imageRef)
        .then((downloadURL) => {
            var Data = {
                id: isAuthenticated,
                url: downloadURL,
            }
            axios.post("http://localhost/setImges/", { Data: Data }).then(function (response) {
              })
              .catch(function (error) {
                  console.error("Error in Axios POST request", error);
              });
        })
          alert("image uploded");
          });
      };
      for(let i = 0; i < Imges.length; i++)
        {
            image.push(Imges[i].image);
        }
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
                            <input className="sand-massage" type="button" value="Edit Porfile" onClick={handleEdite}/>
                            <div className={statics === true?"statics":"hide"}>
                            <span onClick={handleEdite}>x</span>
                            <input
                                type="file"
                                onChange={(event) => {
                                setImageUpload(event.target.files[0]);
                                }}/>
                                <button onClick={uploadFile}> Upload Image</button>
                                <p>Change Name</p>
                                <input
                                placeholder='First Name'
                                type="text"
                                onChange={(event) => {
                                    setuFirstName(event.target.value);
                                }}/>
                                <input
                                placeholder='last Name'
                                type="text"
                                onChange={(event) => {
                                    setuLastName(event.target.value);
                                }}/>
                                <button onClick={UpdateName}> Update Name</button>
                            </div>
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
                        <img className="sc-img-no" alt=""/>
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
                            <input className="sand-massage" type="button" value="Edit Porfile" onClick={handleEdite}/>
                            <div className={statics === true?"statics":"hide"}>
                            <span onClick={handleEdite}>x</span>
                            <input
                                type="file"
                                onChange={(event) => {
                                setImageUpload(event.target.files[0]);
                                }}/>
                                <button onClick={uploadFile}> Upload Image</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-container-left">
                    <div className="sc-img-no" >
                    </div>
                </div>
            </div>
            )
      }

    
}
