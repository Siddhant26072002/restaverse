import React from 'react'
import Trustedby from './Trustedby';
import Funtionality from './Funtionality';
import Customers from './Customers';

export default function Home() {
  return (
    <div>
        <img src='./images/Frame 1.png' className='cover-img'></img>
      <Trustedby/>
      <Funtionality />
      <Customers />
    </div>
  )
}
