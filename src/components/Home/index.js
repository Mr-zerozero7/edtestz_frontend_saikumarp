import React from 'react'
import './index.scss'
import {colors} from '../InputsData/index'


const Home = () => {
    const noOfBalls = 40;

    // Sping Balls generate View
    const generateBalls = (num) => {
        return Array.from(Array(num), (e,i)=> {
            const randomColor = colors[Math.floor(Math.random()* colors.length)];
            return <div className='ball' key={i} style={{
                top: `${Math.random()*100}vh`,
                left: `${Math.random()*100}vw`,
                animationDelay: `${Math.random()* 40}s`,
                backgroundColor: randomColor
            }}></div>
        })
    }

    const consultBusinessView = () => (
      <>
        <div className='consulting-container'>
          <h1 className='consult-heading'>CONSULTING</h1>
          <p className='consult-note'>Our experts decode all industries, from tech to art, Whatever your needs may be, we have the acumen and the audacity to transform them into triumphs through confident consulting</p>
          <button className='talk-to-us-btn' type='button'>Talk To Us!</button>
        </div>
        <div className='business-container'>
          <h1 className='business-heading'>BUSINESS OUTCOME</h1>
          <p className='business-note'>So whether you’re a new entrepreneur seeking guidance or a seasoned titan of industry in need of a fresh perspective, its time to redefine goals where innovation meets inspiration</p>
          <button className='talk-to-us-btn' type='button'>Talk To Us!</button>
        </div>
      </>
    )

  return (
    <>
    <div className='home-page-main-container'>
      <div className='spring-balls-container'>
        {generateBalls(noOfBalls)}
      </div>
      <div className='home-page-image-container'>
        <img className='main-image' src='https://www.thoughtframeworks.com/wp-content/uploads/2022/07/Group-19349-1.png' alt='home pic' />
      </div>
      <div className='heading-container'>
        <h1 className='main-heading'>Collaborate</h1>
      </div>
      <div className='tag-note-and-button-container'>
        <h2 className='tag-note'>Feed Your Intelligence With Our Testing Approach</h2>
        <button type='button' className='started-btn'>Get Started!</button>
      </div>
    </div>
    <div className='brand-content-section'>
        <div className='company-theme-notes-container'>
            <p className='theme-note'>We are Trusted Team that Thrives on Thought Transformation!</p>
        </div>
        <div className='consulting-business-containers'>
          {consultBusinessView()}
        </div>
    </div>
    </>
  )
}

export default Home
