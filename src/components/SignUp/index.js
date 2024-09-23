import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.scss'
import SocialLoginBtn from '../SocialLoginBtn'
import { useAuth } from '../AuthContext'
// import { FaRegEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const [signUpData, setSignUpData] = useState({
        username:'', email:'',password:''
    })

    const [errorMsg, setErrorMsg] = useState('')

    const {isAuthenticated ,login} = useAuth()

    const navigate = useNavigate()

    const handleInputs = (e) => {
        setSignUpData(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }
    

    const handleSignUpFrom = async(event) => {
        event.preventDefault()
        try {
            // const signupUrl = 'http://localhost:4000/api/users/signup'
            const signupUrl = 'https://edtestz-appointment-backend-saikumarp-1.onrender.com/api/users/signup'
            const options = {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpData)
            }
            const response = await fetch(signupUrl, options);
            const data = await response.json()
            if(response.ok){
                login(data.token);
                navigate('/')
                console.log(data)
            }else{
                // console.log(data.errorMsg)
                setErrorMsg(data.errorMsg)
            }
            
        } catch (error) {
            // console.log(error.message);
            setErrorMsg(error.message);
        }
    }

    useEffect(() => {
        if(isAuthenticated){
          navigate('/')
        }
      }, [isAuthenticated,navigate])
    

  return (
    <>
    <div className='auth-page-main-container'>
      <form className='auth-form-container' onSubmit={handleSignUpFrom}>
        <h1 className='auth-heading'>SignUp</h1>
        <div className='inputs-container'>
            <input type='text'  onChange={handleInputs} value={signUpData.username} placeholder='Username' name='username' />
            <input type='email' onChange={handleInputs} value={signUpData.email} placeholder='Email' name='email' />
            <input type='password' onChange={handleInputs} value={signUpData.password} placeholder='Create Password' name='password'/>
        </div>
        <button type='submit' className='auth-btn'>SignUp</button>
        {errorMsg !== '' && <p className='error-msg'>{errorMsg}</p>}
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
