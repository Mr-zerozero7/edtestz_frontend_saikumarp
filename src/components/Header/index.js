import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './index.scss'
import {menuItemsList} from '../InputsData/index'
import { useAuth } from '../AuthContext'
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const {isAuthenticated,accountUser, logout} = useAuth();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  
  const navigate = useNavigate();
  
  const handleLogout  = () => {
    logout();
    navigate('/login')
  }

  const handleMenuBtn = () => {
    setIsActiveMenu(prevStatus => !prevStatus)
  }

  const shortMenu = isActiveMenu ? 'nav-menu-items-container short-menu':'nav-menu-items-container'
  return (
    <nav className='navbar-container'>
      <div className='brand-logo-name-container'>
        <Link to='/'>
          <img className='brand-logo' src='https://www.thoughtframeworks.com/wp-content/uploads/2022/01/TF-Logo-1.webp' alt='brand logo' />
        </Link>
      </div>
      {
        isAuthenticated && (
          <div className={shortMenu} onClick={handleMenuBtn}>
            {
                menuItemsList.map((eachItem, index) => {
                    if(typeof eachItem === 'string'){
                        return (<Link to={eachItem.toLowerCase() === 'home'? '/' : eachItem.toLowerCase()} key={`${index}-menu-item`} className='menu-link'>
                                  <p className='menu-item' >{eachItem}</p>
                              </Link>)
                    }else if(typeof eachItem === 'object' && eachItem.services){
                        return(
                            <div className='dropdown' key={`${index}-dropdown`}>
                                <p className='drop-btn'>Services</p>
                                <div className='dropdown-content'>
                                    {eachItem.services.map((service, subIndex)=>(
                                        <p key={`${subIndex}-service`}>{service}</p>
                                    ))}
                                </div>
                            </div>)
                    }
                    return null;
                })
            }
            <Link to='/appointments/create' className='menu-link'>
              <p className='menu-item book'>Book Appointments</p>
            </Link>
            <Link to='/appointments/' className='menu-link'>
              <p className='menu-item'>Appointments History</p>
            </Link>
          </div>
        )
      }
      <h4 className='user-name'>{accountUser}</h4>
      {
        isAuthenticated && (
          <Link>
            <button type='button' className='logout-btn' onClick={handleLogout}>Logout</button>
          </Link>
        )
      }
      <button type='button' onClick={handleMenuBtn} className='menu-btn'><IoMdMenu className='menu-btn-icon'/></button>
    </nav>
  )
}

export default Header
