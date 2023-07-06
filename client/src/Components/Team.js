import React from 'react'
import TeamMember from './TeamMember'
import dr1 from '../assets/Dr1.jpg'
import dr2 from '../assets/Dr2.jpg'
import dr3 from '../assets/Dr3.jpg'
import dr4 from '../assets/Dr4.jpg'

export default function Team() {
  return (
    <>
        <div className='container'>
            <h1 className='text-center color-head'>Meet our Team of HealthCare Experts and Doctors</h1>
            <div className='d-flex flex-wrap justify-content-around p-5'>
                <TeamMember imgSrc={dr1} />
                <TeamMember imgSrc={dr2} />
                <TeamMember imgSrc={dr3} />
                <TeamMember imgSrc={dr4} />
            </div>
        </div>
    </>
  )
}
