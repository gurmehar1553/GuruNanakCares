import React from 'react'
import TeamMember from './TeamMember'
import dr1 from '../assets/Dr1.jpg'
import dr2 from '../assets/Dr2.jpg'
import dr3 from '../assets/Dr3.jpg'
import dr4 from '../assets/Dr4.jpg'

const DoctorsData = [
  {
    name:"Dr 1",
    specialization:"Ortho Specialist",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:dr1,
  },
  {
    name:"Dr 2",
    specialization:"Heart Specialist",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:dr2,
  },
  {
    name:"Dr 3",
    specialization:"Cardiologist",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:dr3,
  },
  {
    name:"Dr 4",
    specialization:"Gynecologist",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:dr4,
  },
]

export default function Team() {
  return (
    <>
        <div className='container my-5 py-5'>
            <h1 className='text-center color-head'>Meet our Team of HealthCare Experts and Doctors</h1>
            <div className='row justify-content-center'>
                {DoctorsData.map((e,i)=><TeamMember key={"EachDoctorDataRender"+i+e.name} {...e} />)}
            </div>
        </div>
    </>
  )
}
