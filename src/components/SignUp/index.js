import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import SocialLoginBtn from '../SocialLoginBtn'
// import { FaRegEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        username:'', email:'',password:''
    })

    const handleInput = (e) => {
        setSignUpData(prevState => ({...prevState, [e.terget.name]: e.target.value}));
    }

    const handleSignUpFrom = async(event) => {
        event.preventDefault()
        const signupUrl = 'https://edtestz-appointment-backend-saikumarp-1.onrender.com/api/users/signup'
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpData)
        }
        try {
            const response = await fetch(signupUrl, options);
            if(response.ok){
                const data = await response.json()
                console.log(data)
            }
            
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <>
    <div className='auth-page-main-container'>
      <form className='auth-form-container' onSubmit={handleSignUpFrom}>
        <h1 className='auth-heading'>SignUp</h1>
        <div className='inputs-container'>
            <input type='text'  onChange={handleInput} value={signUpData.username} placeholder='username' name='username' />
            <input type='email' onChange={handleInput} value={signUpData.email} placeholder='Email' name='email' />
            <input type='password' onChange={handleInput} value={signUpData.password} placeholder='Create Password' name='password'/>
        </div>
        <button type='submit' className='auth-btn'>SignUp</button>
        <Link to='/login' className='link'>
            <p>Already have an account? <span>Login</span></p>
        </Link>
        <SocialLoginBtn/>
      </form>
    </div>
    <div className='auth-banner-container'>
        <div className='company-theme-notes-container'>
            <p className='theme-note'>We are Trusted Team that Thrives on Thought Transformation!</p>
        </div>
    </div>
    </>
  )
}

export default SignUp
