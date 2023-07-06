import React from 'react'
import sec2img from '../assets/sec2-img.png'
import wellness from '../assets/wellness.png'
import telemedicine from '../assets/telemedicine.png'
import menHealth from '../assets/mental.png'
import healthEd from '../assets/healthed.png'


export default function WhyUs() {
  return (
    <>
        <div className='container'>
            <div className='row m-5 p-5'>
                <div className='col-md-6 border p-5 sec2-left'>
                    <h1 className='text-center sec-2-head'>What makes <br></br>us unique ?</h1>
                    <div className='d-none d-lg-block'>
                        <img src={sec2img} alt='img' width="100%"  />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <h2 className='color-head'><img src={wellness} alt='img' /> Customized wellness plans</h2>
                        <p className='text-left'>Offer personalized wellness plans tailored to each user's specific health goals and needs, taking into account factors such as age, gender, medical history, and lifestyle habits.</p>
                    </div>
                    <div className='text-end'>
                        <h2 className='color-head'><img src={telemedicine} alt='img' /> Telemedicine</h2>
                        <p>Offer online consultations and virtual visits with healthcare professionals to provide convenient and accessible healthcare to users, regardless of their location.</p>
                    </div>
                    <div>
                        <h2 className='color-head'><img src={menHealth} alt='img' /> Mental health support</h2> 
                        <p>Provide a range of mental health resources and tools, such as virtual therapy sessions, mindfulness exercises, and stress-management techniques to help users maintain their emotional well-being.</p>
                    </div>
                    <div className='text-end'>
                        <h2 className='color-head'><img src={healthEd} alt='img' /> Health education</h2> 
                        <p>Provide a wealth of educational resources, such as articles, videos, and infographics, that help users stay informed and empowered about their health and wellness.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}
