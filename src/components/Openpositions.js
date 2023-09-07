import React from 'react'

export default function Openpositions() {
  return (
    <div className='open-pos'>
       <span className='open-pos-text'> Open Positions</span>
        <div className='pos-cards'>
            <div className='card1'>
                <div className='pos-title'>MARKETING</div>
                <div className='pos-role'>
                    <div className='pos-role-head'>Strategy Analyst</div>
                    <div className='pos-role-location'>
                        <img src='./images/MapPinLine.png'></img>
                        <span>Mumbai, India</span>
                    </div>
                </div>
                <button className='apply'>Apply</button>
            </div>
            
            <div className='card1'>
                <div className='pos-title'>ENGINEERING</div>
                <div className='pos-role'>
                    <div className='pos-role-head'>Frontend Developer</div>
                    <div className='pos-role-location'>
                        <img src='./images/MapPinLine.png'></img>
                        <span>Mumbai, India</span>
                    </div>
                </div>
                <button className='apply'>Apply</button>
            </div>

            <div className='card1'>
                <div className='pos-title1'>DESIGN</div>
                <div className='pos-role'>
                    <div className='pos-role-head'>Senior UX Consultant</div>
                    <div className='pos-role-location'>
                        <img src='./images/MapPinLine.png'></img>
                        <span>Mumbai, India</span>
                    </div>
                </div>
                <button className='apply'>Apply</button>
            </div>

        </div>
        </div>
  )
}
