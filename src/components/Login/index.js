import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
// import Cookies from 'js-cookie'
import './index.scss'
import SocialLoginBtn from '../SocialLoginBtn'
import { useAuth } from '../AuthContext'
// import { FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
    const [loginFrom, setLoginForm] = useState({
        email:'', password:''
    })
    const {isAuthenticated ,login} = useAuth()

    const navigate = useNavigate()

    const handleInputs = (e) => {
        setLoginForm(prevState => ({...prevState, [e.target.name]: e.target.value}))
        // console.log('event triggered')
    }

    const handleLoginForm = async(event) => {
        event.preventDefault()
        try {
            const loginUrl = 'https://edtestz-appointment-backend-saikumarp-1.onrender.com/api/users/login'
            const options = {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginFrom)
            }
            const response = await fetch(loginUrl, options)
            if(response.ok){
                const data = await response.json()
                // Cookies.set('jwt_token', data.token)
                // console.log(data.token)
                login(data.token)
                navigate('/')
            }else{
                console.log('post error')
            }
        } catch (error) {
            console.log(error.message)
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
      <form className='auth-form-container' onSubmit={handleLoginForm}>
        <h1 className='auth-heading'>Login</h1>
        <div className='inputs-container'>
            <input type='email' onChange={handleInputs} value={loginFrom.email} placeholder='Email' name='email' />
            <input type='password' onChange={handleInputs} value={loginFrom.password} placeholder='Create Password' name='password'/>
        </div>
        <button type='submit' className='auth-btn'>Login</button>
        <Link to='/signup' className='link'>
            <p>Don't have an account? <span>SignUp</span></p>
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

export default Login
