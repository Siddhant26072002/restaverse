import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <span className='footer-header'>Ready to take your business to the next level? 🚀</span>
            <br></br>
            <span className='footer-text'>Fill out this form and we promise to get back as soon as possible.</span>

        </div>
        <div className='form'>
            <div className='name'>
            <label for="name">Full Name</label>
            <br></br>
            <input type="text" id="name" name="name"></input>
            </div>
            <div className='email'>
            <label for="email">Email</label><br></br>
            <input type="email" id="email" name="email" required></input>
            </div>
            <div className='number'>
            <label for="number">Your Number</label><br></br>
            <input type="text" id="number" name="number" required></input>
            </div>
            <div className='company'>
            <label for="company">Company / Brand name</label><br></br>
            <input type="text" id="company" name="company" required></input>
            </div>
            <div className='resids'>
             <label for="resids">No. of res ids</label><br></br>
            <input type="text" id="resids" name="resids" required></input>
            </div>

            <div className='text-area'>
             <label for="area">What can we help you with?</label><br></br>
            <input type="text" id="area" name="area" required></input>
            </div>
            <button>Submit</button>
        </div>
    </div>
  )
}
