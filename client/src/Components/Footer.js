import React from 'react'
import { Link } from 'react-router-dom'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'
import telegram from '../assets/telegram.png'
import yt from '../assets/yt.png'

export default function Footer() {
  return (
    <>
        <div className='p-5 border footer'>
            <div>
                <h1 className='color-head'>HealthCare & Wellness Hub</h1>
                <button className='btn btn-lg'><Link className='appt-link' to='/appointment'>Schedule an Appointment</Link></button>
                <p className='text-center'>Copyrights ©2023 HealthCare & Wellness Hub. All rights reserved.</p>
                <div className='text-center'>
                    <img src={insta} alt='img' />
                    <img src={facebook} alt='img' />
                    <img src={yt} alt='img' />
                    <img src={telegram} alt='img' />
                </div>
                
            </div>
        </div>
    </>
  )
}
