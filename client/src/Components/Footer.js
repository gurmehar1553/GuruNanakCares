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
                <h1 className='text-light'>Guru Nanak Cares</h1>
                <button className='btn btn-lg'><Link className='appt-link' to='/appointment'>Schedule an Appointment</Link></button>
                <p className='text-center'>Copyrights ©2023 HealthCare & Wellness Hub. All rights reserved.</p>
                <div className='d-flex justify-content-center'>
                    <Link to='https://www.instagram.com/gurunanakcares/'><img src={insta} alt='img' /></Link>
                    <Link to='https://www.facebook.com/gurunanakcares/'><img src={facebook} alt='img' /></Link>
                    <Link to='https://www.youtube.com/@GuruNanakCares'><img src={yt} alt='img' /></Link>
                    <Link to='https://t.me/gurunanakcares'><img src={telegram} alt='img' /></Link>
                </div>
                
            </div>
        </div>
    </>
  )
}
