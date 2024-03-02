import React, { useEffect, useState } from 'react'
import'./Content.css'
import {easeInOut, motion as m} from 'framer-motion'
import Card  from '../card/card';

export default function Content(props) {
    if(props.num === 0)
    {
        return(
            <>
            {/* {React.useEffect(()=>{window.location.reload(true)},[])} */}
            <m.div className='page'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 ,ease:"easeIn"}}>
                <p>Upper chest</p>
            <div className="first">
                <Card change={props.num}></Card>
                </div>
                <p>Middle chest</p>
            <div className="mid"><Card change={props.num}></Card></div>
            <p>Lower chest</p>
            <div className="last"><Card change={props.num}></Card></div>
            </m.div>
            </>
            )
    }
    if(props.num === 1)
    {
        return(
            <m.div className='page'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 ,ease:"easeIn"}}>
        <p>Biceps</p>
        <div className="first"><Card change={props.num}></Card></div>
        <p>Triceps</p>
            <div className="mid"><Card change={props.num}></Card></div>
        <p>Wrist</p>
            <div className="last"><Card change={props.num}></Card></div>
            </m.div>
            )
    }

    if(props.num === 2)
    {
        return(<m.div style={{justifyContent:"center",alignItems:"center"}} className='page'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 ,ease:"easeIn"}}>
        <div className="first"><Card change={props.num}></Card></div>
        </m.div>);
    }
    if(props.num === 3)
    {
        return(
            <m.div className='page'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 ,ease:"easeIn"}}>
            <p>Front shoulder</p>
            <div className="first"><Card change={props.num}></Card></div>
            <p>Side shoulder</p>
            <div className="mid"><Card change={props.num}></Card></div>
            <p>Back shoulder</p>
            <div className="last"><Card change={props.num}></Card></div>
            </m.div>
            )
    }
    if(props.num === 4)
    {
        return(
            <m.div className='page'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 ,ease:"easeIn"}}>
            <p>Upper Back</p>
            <div className="first"><Card change={props.num}></Card></div>
            <p>Middle Back</p>
            <div className="mid"><Card change={props.num}></Card></div>
            <p>Lower Back</p>
            <div className="last"><Card change={props.num}></Card></div>
            </m.div>
            )
    }
    if(props.num === 5)
    {
        return(
            <m.div className='page'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 ,ease:"easeIn"}}>
            <p>Front legs</p>
            <div className="first"><Card change={props.num}></Card></div>
            <p>Hamstring</p>
            <div className="mid"><Card change={props.num}></Card></div>
            <p>Calf</p>
            <div className="last"><Card change={props.num}></Card></div>
            </m.div>
            )
    }
    


    // if(props.num === 0)
    // {
    //     <m.div className='chest'
    // initial={{ opacity: 0, scale: 0.5 }}
    // animate={{ opacity: 1, scale: 1 }}
    // transition={{ duration: 0.5 ,ease:"easeIn"}}>
    //     <div>
    //     <input />
    //         <button>add</button>
    //     </div>
    //     <div >
    //     <input />
    //         <button>add</button>
    //     </div>
    //     <div >
    //     <input />
    //         <button>add</button>
    //     </div>
    // </m.div>
    // }
    // if(props.num === 1){
    // const [messageUpper, setmessageUpper] = useState(0);
    // const [messageMiddel, setmessageMiddle] = useState(0);
    // const [messageLower, setmessageLower] = useState(0);
    // let setsUpper =[];
    // let setsMiddle =[];
    // const setsLower =[];
    // const renderListUpper = () => {
    //     for (let i = 1; i <= messageUpper; i++) {
    //         setsUpper.push(
    //         <>
    //         <div className="all">
    //             <p>{i}</p>
    //             <div className="question">
    //                 <p>Wight : </p>
    //                 <input type="text" required/>
    //                 <p>Reps :</p>
    //                 <input type="text" required/>
    //              </div>
    //              </div>
    //         </>
    //         );
    //     }
        
    //     return setsUpper;
    //   };
    //   const renderListMiddle = () => {
    //     for (let i = 1; i <= messageMiddel; i++) {
    //         setsMiddle.push(<>
    //             <div className="all">
    //                 <p>{i}</p>
    //                 <div className="question">
    //                     <p>Wight : </p>
    //                     <input type="text" required/>
    //                     <p>Reps :</p>
    //                     <input type="text" required/>
    //                  </div>
    //                  </div>
    //             </>);
    //     }
    //     return setsMiddle;
    //   };
    //   const renderListLower = () => {
    //     for (let i = 1; i <= messageLower; i++) {
    //         setsLower.push(<>
    //         <div className="all">
    //             <p>{i}</p>
    //             <div className="question">
    //                 <p>Wight : </p>
    //                 <input type="text" required/>
    //                 <p>Reps :</p>
    //                 <input type="text" required/>
    //              </div>
    //              </div>
    //         </>);
    //     }
    //     return setsLower;
    //   };
    // const handleChange = (event,num) => {
    //     let loop = event.target.value;
    //     if(num === 1) {setmessageUpper(loop)}
    //     if(num === 2) {setmessageMiddle(loop)}
    //     if(num === 3) {setmessageLower(loop)}

    //     for (let i = 0; i < loop; i++) {
    //         if(num == 1)
    //         {
    //             setsUpper.push(<div>{i}</div>)
    //         }
    //         if(num == 2)
    //         {
    //             setsMiddle.push(<div>{i}</div>)

    //         }
    //         if(num == 3)
    //         {
    //             setsLower.push(<div>{i}</div>)
    //         }
    //     }
    //   };
    //     return (
    //     <m.div className='chest' initial={{ opacity: 0, scale: 0.5 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.5 ,ease:"easeIn"}}>
    //         <h1>Bicep </h1>
    //         <div className="upperChest">
    //             <div className="left">
    //                 <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,1)}/>
    //                 </div>
            
    //             <div className="mid">{renderListUpper()}</div>
                
    //             <div className="right"><button>add</button></div>
                

    //         </div>
    //         <h1>Tricep</h1>
    //         <div className="middleChest">
    //             <div className="left">
    //             <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,2)}/></div>
    //             <div className="mid">{renderListMiddle()}</div>
    //             <div className="right"><button>add</button></div>
    //             </div>
    //             <h1>Wrist</h1>
    //         <div className="lowerChest">
    //              <div className="left">
    //              <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,3)}/></div>
    //              <div className="mid">{renderListLower()}</div>
    //             <div className="right"><button>add</button></div></div>
    //     </m.div>
    //   )
    // }
    // if(props.num === 2){
    //     const [messageUpper, setmessageUpper] = useState(0);
    //     const [messageMiddel, setmessageMiddle] = useState(0);
    //     const [messageLower, setmessageLower] = useState(0);
    //     let setsUpper =[];

    //     const renderListUpper = () => {
    //         for (let i = 1; i <= messageUpper; i++) {
    //             setsUpper.push(
    //             <>
    //             <div className="all">
    //                 <p>{i}</p>
    //                 <div className="question">
    //                     <p>Wight : </p>
    //                     <input type="text" required/>
    //                     <p>Reps :</p>
    //                     <input type="text" required/>
    //                  </div>
    //                  </div>
    //             </>
    //             );
    //         }
            
    //         return setsUpper;
    //       };

    //     const handleChange = (event,num) => {
    //         let loop = event.target.value;
    //         if(num === 1) {setmessageUpper(loop)}
    
    //         for (let i = 0; i < loop; i++) {
    //             if(num == 1)
    //             {
    //                 setsUpper.push(<div>{i}</div>)
    //             }
    //         }
    //       };
    //         return (
    //         <m.div className='chest' style={{justifyContent: "center"}} initial={{ opacity: 0, scale: 0.5 }}
    //         animate={{ opacity: 1, scale: 1 }}
    //         transition={{ duration: 0.5 ,ease:easeInOut}}>
    //             <h1>Core </h1>
    //             <div className="upperChest">
    //                 <div className="left">
    //                     <p>num of sets : </p>
    //                     <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,1)}/>
    //                     </div>
                
    //                 <div className="mid">{renderListUpper()}</div>
                    
    //                 <div className="right"><button>add</button></div>
                    
    
    //             </div>
    //         </m.div>)
    // }
    // if(props.num === 3)
    // {
    // const [messageUpper, setmessageUpper] = useState(0);
    // const [messageMiddel, setmessageMiddle] = useState(0);
    // const [messageLower, setmessageLower] = useState(0);
    // let setsUpper =[];
    // let setsMiddle =[];
    // const setsLower =[];
    // const renderListUpper = () => {
    //     for (let i = 1; i <= messageUpper; i++) {
    //         setsUpper.push(
    //         <>
    //         <div className="all">
    //             <p>{i}</p>
    //             <div className="question">
    //                 <p>Wight : </p>
    //                 <input type="text" required/>
    //                 <p>Reps :</p>
    //                 <input type="text" required/>
    //              </div>
    //              </div>
    //         </>
    //         );
    //     }
        
    //     return setsUpper;
    //   };
    //   const renderListMiddle = () => {
    //     for (let i = 1; i <= messageMiddel; i++) {
    //         setsMiddle.push(<>
    //             <div className="all">
    //                 <p>{i}</p>
    //                 <div className="question">
    //                     <p>Wight : </p>
    //                     <input type="text" required/>
    //                     <p>Reps :</p>
    //                     <input type="text" required/>
    //                  </div>
    //                  </div>
    //             </>);
    //     }
    //     return setsMiddle;
    //   };
    //   const renderListLower = () => {
    //     for (let i = 1; i <= messageLower; i++) {
    //         setsLower.push(<>
    //         <div className="all">
    //             <p>{i}</p>
    //             <div className="question">
    //                 <p>Wight : </p>
    //                 <input type="text" required/>
    //                 <p>Reps :</p>
    //                 <input type="text" required/>
    //              </div>
    //              </div>
    //         </>);
    //     }
    //     return setsLower;
    //   };
    // const handleChange = (event,num) => {
    //     let loop = event.target.value;
    //     if(num === 1) {setmessageUpper(loop)}
    //     if(num === 2) {setmessageMiddle(loop)}
    //     if(num === 3) {setmessageLower(loop)}

    //     for (let i = 0; i < loop; i++) {
    //         if(num == 1)
    //         {
    //             setsUpper.push(<div>{i}</div>)
    //             console.log("U : ",setsUpper);
    //             console.log("M : ",setsMiddle);
    //         }
    //         if(num == 2)
    //         {
    //             setsMiddle.push(<div>{i}</div>)

    //         }
    //         if(num == 3)
    //         {
    //             setsLower.push(<div>{i}</div>)
    //         }
    //     }
    //   };
    //     return (
    //     <m.div className='chest' initial={{ opacity: 0, scale: 0.5 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.5 ,ease:easeInOut}}>
    //         <h1>Front Deltoid</h1>
    //         <div className="upperChest">
    //             <div className="left">
    //                 <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,1)}/>
    //                 </div>
            
    //             <div className="mid">{renderListUpper()}</div>
                
    //             <div className="right"><button>add</button></div>
                

    //         </div>
    //         <h1> Lateral</h1>
    //         <div className="middleChest">
    //             <div className="left">
    //             <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,2)}/></div>
    //             <div className="mid">{renderListMiddle()}</div>
    //             <div className="right"><button>add</button></div>
    //             </div>
    //             <h1>Rear Deltoid</h1>
    //         <div className="lowerChest">
    //              <div className="left">
    //              <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,3)}/></div>
    //              <div className="mid">{renderListLower()}</div>
    //             <div className="right"><button>add</button></div></div>
    //     </m.div>
    //   )
    // }
    // if(props.num === 4)
    // {
    // const [messageUpper, setmessageUpper] = useState(0);
    // const [messageMiddel, setmessageMiddle] = useState(0);
    // const [messageLower, setmessageLower] = useState(0);
    // let setsUpper =[];
    // let setsMiddle =[];
    // const setsLower =[];
    // const renderListUpper = () => {
    //     for (let i = 1; i <= messageUpper; i++) {
    //         setsUpper.push(
    //         <>
    //         <div className="all">
    //             <p>{i}</p>
    //             <div className="question">
    //                 <p>Wight : </p>
    //                 <input type="text" required/>
    //                 <p>Reps :</p>
    //                 <input type="text" required/>
    //              </div>
    //              </div>
    //         </>
    //         );
    //     }
        
    //     return setsUpper;
    //   };
    //   const renderListMiddle = () => {
    //     for (let i = 1; i <= messageMiddel; i++) {
    //         setsMiddle.push(<>
    //             <div className="all">
    //                 <p>{i}</p>
    //                 <div className="question">
    //                     <p>Wight : </p>
    //                     <input type="text" required/>
    //                     <p>Reps :</p>
    //                     <input type="text" required/>
    //                  </div>
    //                  </div>
    //             </>);
    //     }
    //     return setsMiddle;
    //   };
    //   const renderListLower = () => {
    //     for (let i = 1; i <= messageLower; i++) {
    //         setsLower.push(<>
    //         <div className="all">
    //             <p>{i}</p>
    //             <div className="question">
    //                 <p>Wight : </p>
    //                 <input type="text" required/>
    //                 <p>Reps :</p>
    //                 <input type="text" required/>
    //              </div>
    //              </div>
    //         </>);
    //     }
    //     return setsLower;
    //   };
    // const handleChange = (event,num) => {
    //     let loop = event.target.value;
    //     if(num === 1) {setmessageUpper(loop)}
    //     if(num === 2) {setmessageMiddle(loop)}
    //     if(num === 3) {setmessageLower(loop)}

    //     for (let i = 0; i < loop; i++) {
    //         if(num == 1)
    //         {
    //             setsUpper.push(<div>{i}</div>)
    //             console.log("U : ",setsUpper);
    //             console.log("M : ",setsMiddle);
    //         }
    //         if(num == 2)
    //         {
    //             setsMiddle.push(<div>{i}</div>)

    //         }
    //         if(num == 3)
    //         {
    //             setsLower.push(<div>{i}</div>)
    //         }
    //     }
    //   };
    //     return (
    //     <m.div className='chest' initial={{ opacity: 0, scale: 0.5 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.5 ,ease:easeInOut}}>
    //         <h1>Upper Back</h1>
    //         <div className="upperChest">
    //             <div className="left">
    //                 <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,1)}/>
    //                 </div>
            
    //             <div className="mid">{renderListUpper()}</div>
                
    //             <div className="right"><button>add</button></div>
                

    //         </div>
    //         <h1>Middel Back</h1>
    //         <div className="middleChest">
    //             <div className="left">
    //             <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,2)}/></div>
    //             <div className="mid">{renderListMiddle()}</div>
    //             <div className="right"><button>add</button></div>
    //             </div>
    //             <h1>Lower Back</h1>
    //         <div className="lowerChest">
    //              <div className="left">
    //              <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,3)}/></div>
    //              <div className="mid">{renderListLower()}</div>
    //             <div className="right"><button>add</button></div></div>
    //     </m.div>
    //   )
    // }
    // if(props.num === 5)
    // {
    // const [messageUpper, setmessageUpper] = useState(0);
    // const [messageMiddel, setmessageMiddle] = useState(0);
    // const [messageLower, setmessageLower] = useState(0);
    // let setsUpper =[];
    // let setsMiddle =[];
    // const setsLower =[];
    // const renderListUpper = () => {
    //     for (let i = 1; i <= messageUpper; i++) {
    //         setsUpper.push(
    //         <>
    //         <div className="all">
    //             <p>{i}</p>
    //             <div className="question">
    //                 <p>Wight : </p>
    //                 <input type="text" required/>
    //                 <p>Reps :</p>
    //                 <input type="text" required/>
    //              </div>
    //              </div>
    //         </>
    //         );
    //     }
        
    //     return setsUpper;
    //   };
    //   const renderListMiddle = () => {
    //     for (let i = 1; i <= messageMiddel; i++) {
    //         setsMiddle.push(<>
    //             <div className="all">
    //                 <p>{i}</p>
    //                 <div className="question">
    //                     <p>Wight : </p>
    //                     <input type="text" required/>
    //                     <p>Reps :</p>
    //                     <input type="text" required/>
    //                  </div>
    //                  </div>
    //             </>);
    //     }
    //     return setsMiddle;
    //   };
    //   const renderListLower = () => {
    //     for (let i = 1; i <= messageLower; i++) {
    //         setsLower.push(<>
    //         <div className="all">
    //             <p>{i}</p>
    //             <div className="question">
    //                 <p>Wight : </p>
    //                 <input type="text" required/>
    //                 <p>Reps :</p>
    //                 <input type="text" required/>
    //              </div>
    //              </div>
    //         </>);
    //     }
    //     return setsLower;
    //   };
    // const handleChange = (event,num) => {
    //     let loop = event.target.value;
    //     if(num === 1) {setmessageUpper(loop)}
    //     if(num === 2) {setmessageMiddle(loop)}
    //     if(num === 3) {setmessageLower(loop)}

    //     for (let i = 0; i < loop; i++) {
    //         if(num == 1)
    //         {
    //             setsUpper.push(<div>{i}</div>)
    //             console.log("U : ",setsUpper);
    //             console.log("M : ",setsMiddle);
    //         }
    //         if(num == 2)
    //         {
    //             setsMiddle.push(<div>{i}</div>)

    //         }
    //         if(num == 3)
    //         {
    //             setsLower.push(<div>{i}</div>)
    //         }
    //     }
    //   };
    //     return (
    //     <m.div className='chest' initial={{ opacity: 0, scale: 0.5 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.5 ,ease:easeInOut}}>
    //         <h1>Front Leg</h1>
    //         <div className="upperChest">
    //             <div className="left">
    //                 <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,1)}/>
    //                 </div>
            
    //             <div className="mid">{renderListUpper()}</div>
                
    //             <div className="right"><button>add</button></div>
                

    //         </div>
    //         <h1>Hamstring</h1>
    //         <div className="middleChest">
    //             <div className="left">
    //             <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,2)}/></div>
    //             <div className="mid">{renderListMiddle()}</div>
    //             <div className="right"><button>add</button></div>
    //             </div>
    //             <h1>Calf</h1>
    //         <div className="lowerChest">
    //              <div className="left">
    //              <p>num of sets : </p>
    //                 <input className='inp' maxLength={2} onChange={(e)=>handleChange(e,3)}/></div>
    //              <div className="mid">{renderListLower()}</div>
    //             <div className="right"><button>add</button></div></div>
    //     </m.div>
    //   )
    // }
//   return (
//     // <m.div className='chest'
//     // initial={{ opacity: 0, scale: 0.5 }}
//     // animate={{ opacity: 1, scale: 1 }}
//     // transition={{ duration: 0.5 ,ease:"easeIn"}}>
//     //     <div className="upperChest">
//     //     <input />
//     //         <button>add</button>
//     //     </div>
//     // </m.div>
//   )
}
