import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found-page-maain-container'>
      <h1>NotFound</h1>
      <Link to='/'>
        <button type='button' className='form-started-btn'>Back to Home</button>
      </Link>
    </div>
  )
}

export default NotFound
