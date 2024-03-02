'user client';
import React, { useEffect, useRef } from 'react'
import "./RightSide.css"
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Line ,Bar,Doughnut } from "react-chartjs-2";
import User from '../../data/User.json'
import {exercise} from '../../data/ex';
export default function RightSide({Exercises}) {
    const [ll , setLL] = useState([]);

    useEffect(()=>{
        setLL(Exercises);
            console.log("no : ",Exercises);
    },[Exercises.length]);

    const [statics,setstatics] =useState(false);
    const handle = ()=> {
        statics === true ?setstatics(false) :setstatics(true);
    };
    if(Exercises.length)
    {
        const chestlabals=[];
        const chestData=[];
        const Armlabals=[];
        const ArmData=[];
        const corelabals=[];
        const coreData=[];
        const shoulderslabals=[];
        const shouldersData=[];
        const backlabals=[];
        const backData=[];
        const leglabals=[];
        const legData=[];
        for(let i=0;i<Exercises.length;i++)
        {
            if(Exercises[i].category == '0')
            {
                chestlabals.push(Exercises[i].setDate);
                chestData.push(Exercises[i].weight);
            }
            if(Exercises[i].category == '1')
            {
                Armlabals.push(Exercises[i].setDate);
                ArmData.push(Exercises[i].weight);
            }
            if(Exercises[i].category == '2')
            {
                corelabals.push(Exercises[i].setDate);
                coreData.push(Exercises[i].weight);
            }
            if(Exercises[i].category == '3')
            {
                shoulderslabals.push(Exercises[i].setDate);
                shouldersData.push(Exercises[i].weight);
            }
            if(Exercises[i].category == '4')
            {
                backlabals.push(Exercises[i].setDate);
                backData.push(Exercises[i].weight);
            }
            if(Exercises[i].category == '5')
            {
                leglabals.push(Exercises[i].setDate);
                legData.push(Exercises[i].weight);
            }
        }
        return (
        <>
        <div className="right-side">
        <div className="zero-container-right">
                <div className="top"><h1>Top Followers</h1></div>
                {User.TopFollowers.map((u)=><div className="person"><img src={u.UserImg}
                alt=""/><p>{u.username}</p><h1>rank : {u.rank}</h1></div>)}
        </div>
        <div className="first-container-right">
            <Line  width={"700px"} height={"310px"} className='Line'
            data={{
                labels: Armlabals,
                datasets: [
                    {
                    label: 'Arm',
                    data:ArmData,
                    },
                ],
                }}
                ></Line>
            </div>
            <div className="second-container-right">
                <input type="button" value="Show More" onClick={handle}/>
            </div>
            <div className={statics === true?"statics":"hide"}>
            <span onClick={handle}>x</span>
            <Bar width={"300px"} height={"110px"} className='Line' data={{
                labels: chestlabals,
                datasets: [{
                    label:"Chest",
                    data:chestData,
                    backgroundColor:"#a0beed",
                    borderColor:'#a0beed'
                }]
            }}></Bar>
            <Bar width={"300px"} height={"110px"} className='Line' data={{
                labels: Armlabals,
                datasets: [{
                    label:"Arm",
                    data:ArmData,
                    backgroundColor:"#a0beed",
                    borderColor:'#a0beed'
                }]
            }}></Bar>
            <Doughnut style={{alignSelf:"center"}} width={"300px"} height={"110px"} className='Line' data={{
                labels: corelabals,
                datasets: [{
                    label:"Core",
                    data:coreData,
                    borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ['rgba(232,99,132,1)',
            'rgba(232,211,6,1)',
            'rgba(54,162,235,1)',
            'rgba(255,159,64,1)',
            'rgba(153,102,255,1)' ],
                }]
            }}></Doughnut>
            <Line width={"300px"} height={"110px"} className='Line' data={{
                labels: shoulderslabals,
                datasets: [{
                    label:"Shoulders",
                    data:shouldersData,
                    backgroundColor:"#a0beed",
                    borderColor:'#a0beed'
                }]
            }}></Line>
            <Line width={"300px"} height={"110px"} className='Line' data={{
                labels: backlabals,
                datasets: [{
                    label:"Back",
                    data:backData,
                    backgroundColor:"#a0beed",
                    borderColor:'#a0beed'
                }]
            }}></Line>
            <Line width={"300px"} height={"110px"} className='Line' data={{
                labels: leglabals,
                datasets: [{
                    label:"Legs",
                    data:legData,
                    backgroundColor:"#a0beed",
                    borderColor:'#a0beed'
                }]
            }}></Line>
           </div>
        
        </div>
        </>
        )
    }else{
        return (
            <>
            <div className="right-side">
            <div className="zero-container-right">
                    <div className="top"><h1>Top Followers</h1></div>
                    {User.TopFollowers.map((u)=><div className="person"><img src={u.UserImg} alt=""/><p>{u.username}</p><h1>rank : {u.rank}</h1></div>)}
                    
            </div>
            <div className="first-container-right">
                <Line width={"700px"} height={"310px"} className='Line'
                data={{
                    labels: [],
                    datasets: [
                      {
                        label: 'Arm',
                        data:[],
                      },
                    ],
                  }}
                ></Line>
            </div>
            <div className="second-container-right">
                <input type="button" value="Show More" onClick={handle}/>
            </div>
            <div className={statics === true?"statics":"hide"}>
            <span onClick={handle}>x</span>
            <Line width={"300px"} height={"110px"} className='Line' data={{
                    labels: [],
                    datasets: [{
                        label:"No Data",
                        data:[],
                        backgroundColor:"#a0beed",
                        borderColor:'#a0beed'
                    }]
                }}></Line>
                
            </div>
        
        </div>
        </>)
    }
}

