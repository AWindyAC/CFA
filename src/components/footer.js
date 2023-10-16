import React from 'react'
import '../App.css';
import { FaFacebook,FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='Footer w-100'>
      <div className='social'>
      <a href='https://www.facebook.com/CFAOviedoNorthUCFFSU/' target='_blank'><FaFacebook className='social-icons' fontSize={30}/></a>
      <a href='https://www.instagram.com/cfaoviedo.northucf/' target='_blank'><FaInstagram className='social-icons' fontSize={35}/></a>
      </div>
      <div>
        <p>
          Phone: (407) 365-7657
          <b style={{fontSize: '20px', marginLeft:'10px', marginRight:'10px'}}>|</b>
          32 E Mitchell Hammock Rd, Oviedo, FL 32765
          <b style={{fontSize: '20px', marginLeft:'10px', marginRight:'10px'}}>|</b> 
          oviedo3888@gmail.com
        </p>
      </div>
      <p>Copyright © 2021, All rights reserved.</p>
    </div>
  )
}

export default Footer
