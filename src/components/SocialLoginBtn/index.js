import React from 'react'
import './index.scss'
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLoginBtn = () => {
  return (
    <>
    <div className='or-container'>
          <hr/><span>Or</span><hr/>
      </div>
      <div className='social-acc-container'>
          <button type='button' className='login-through'><FaFacebook className='login-icon'/> Login with Facebook</button>
          <button type='button' className='login-through'><FcGoogle className='login-icon'/> Login with Google</button>
      </div>
    </>
  )
}

export default SocialLoginBtn
