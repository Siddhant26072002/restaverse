import React from 'react'
import Openpositions from './Openpositions'

export default function 
() {
  return (
    <div className='careers'>

      <div className='career-image'>
        <div className='career-image-text'>
          <span className='career-title'>
            Restaverse is looking for <span className='highlight'>like-minded</span> individuals. We prefer both humans and aliens 👽
          </span>
          <span className='career-light'>You don’t have to wait for a better world.<br></br>
You can join us and build it.</span>
          <button className='get-started'>Get Started</button>
        </div>
        <div className='career-rocket'>
           <img className="rocket" src="./images/image 35.png"></img>
           <div className='clouds'>
            <img className='mid-cloud' src="./images/image 28.png"></img>
            <img className='left-cloud' src="./images/image 29.png"></img>
            
            <img className='right-cloud' src="./images/image 30.png"></img>
           </div>
        </div>
      </div>

      <Openpositions />

    </div>
  )
}
