import React from 'react'
import './index.scss'

const footerMenuItems=[
    'About Us', 'Careers', 'Contact Us', 'Sitemap', 'Terms & Conditions', 'Privacy'
]
const socialMIcons = [
    {src:'facebook.png', url: 'https://www.facebook.com/' },
    {src:'instagram.png', url: 'https://www.instagram.com/' },
    {src:'linkedin.png', url: 'https://www.linkedin.com/' },
    {src:'twitter.png', url: 'https://www.twitter.com/' },
]

const Footer = () => {
  return (
    <div className='footer-main-container'>
        <div className='empty-container'>
            <div className='primary-container'>
                <form className='form-container'>
                    <h2 className='form-heading'>ARE YOU READY FOR A QUALITY SERVICE?</h2>
                    <p className='form-note'>Hire A Dedicated Team Now!</p>
                    <div className='inputs-container'>
                        <input className='user-request-input' type='text' placeholder='Name*'/>
                        <input className='user-request-input' type='email' placeholder='Email*'/>
                        <input className='user-request-input' type='text' placeholder='PhoneNumber'/>
                    </div>
                    <button type='button' className='form-started-btn'>Get Started</button>
                </form>
            </div>
        </div>
      <div className='secondary-container'>
        <div className='footer-brand-logo-name-container'>
            <div className='f-logo-name-container'>
                <img className='footer-logo' src='/icons/social/logo02.PNG' alt='footer logo' />
                <div className='brand-naming-container'>
                    <h1 className='brand-heading'>Thought</h1>
                    <h1 className='brand-name'>Frameworks</h1>
                </div>
            </div>
            <div className='footer-menu-container'>
                {
                    footerMenuItems.map(fitem => (
                        <p className='footer-menu-item' key={fitem}>{fitem}</p>
                    ))
                }
            </div>
            <div className='social-media-container'>
                {socialMIcons.map((icon, index) => (
                    <a key={index} href={icon.url} target='_blank' rel="noreferrer noopener">
                    <img className='social-icon' src={`icons/social/${icon.src}`} alt={`${icon.src} icon`} />
                    </a>
                ))}
            </div>
            <p className='copy-right-note'>&copy; 2024 Thought Frameworks Reserve All Rights</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
