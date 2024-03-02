import React from 'react'

export default function topSide({UserImg,name , rank,dayOnTrack,points }) {
  return (
    <>
        <div className="topSide">
            <div className="left-side">
                <div className="first-container-left">
                    <div className="fc-left">
                        {/* <img src={UserImg} alt=""/> */}
                    </div>
                    <div className="fc-right">
                        <div className="fc-right-name">
                            <p >{name}</p>
                            <img src="/assets/image/verify.gif" alt=""/>
                        </div>
                        <div className="fc-right-rank">
                            <p>rank #{rank} on Egypt</p>
                            <img src="/assets/image/egypt.png" alt=""/>
                        </div>
                        <div className="fc-right-track-points">
                            <p>{dayOnTrack} day on Track</p>
                            <p>{points} points</p>
                        </div>
                        <div className="fc-right-input">
                            <input className="follow" type="button" value="Follow"/>
                            <input className="sand-massage" type="button" value="Sand massage"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}
