import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar'
import Cookies from 'js-cookie'
import { LuClock } from "react-icons/lu";
import { IoVideocamOutline } from "react-icons/io5";
import './index.scss'

const BookAppointments = () => {
    const [appointment, setAppointment] = useState({
        date:'',time:'',description:'', favourite: false
    });
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    const handleInput = (event) => {
        setAppointment(prevState => ({...prevState,[event.target.name]: event.target.value}))
    }

    const handleChangeDate = (date) =>{
        setAppointment(prevState => ({...prevState,
            date:date
        }))
    }
    const handleAppointment= (event) => {
      event.preventDefault();
      console.log(appointment)
      setSubmit(true)
    }
    
    useEffect(() => {
        if(submit){
            const postData = async () =>{
                // const appointmentUrl = 'http://localhost:4000/api/appointments/create';
                const appointmentUrl = 'https://edtestz-appointment-backend-saikumarp-1.onrender.com/api/appointments/create';
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${Cookies.get('jwt_token')}`
                    },
                    body: JSON.stringify(appointment)
                }
                try {
                    const response = await fetch(appointmentUrl, options);
                    if(response.ok){
                        const data = await response.json();
                        console.log(data)
                        navigate('/appointments/')
                    }
                } catch (error) {
                    console.log(error.message)
                }finally{
                    setSubmit(false)
                }
            };
            postData();
            setAppointment({date:'',time:'',description:'', favourite: false})
        }
    }, [submit, appointment,navigate])
    

  return (
    <div className='book-appointments-main-container'>
      <div className='booking-side-wall-container'>
        <h1 className='wall-heading'>Hi, Welcome to Bookings!</h1>
        <p className='wall-note'>A Defect in your software,
        You are just one call away from getting rid of me…</p>
        <img className='wall-image' src='/icons/images/wallpic01.PNG' alt='wall pic' />
      </div>
      <div className='booking-section-container'>
        <img className='booking-brand-logo' src='https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/19625021/7dfbdb83.png' alt='booking brand logo' />
        <hr/>
        <div className='status-container'>
            <h3 className='status-head'>Thought Frameworks Team</h3>
            <h1 className='time-head'>30 Minute Meeting</h1>
            <div className='instruction-container'>
                <p className='duration-tag'><LuClock className='meet-icon'/>30 min</p>
                <p className='web-tag'><IoVideocamOutline className='meet-icon'/>Web conferencing details provided upon confirmation</p>
                <p className='status-note'>Great Thought, We look forward to your collaboration with Thought Frameworks.</p>
                <p className='tech-note'>QA & QC | Design | Development | DevOps | Digital</p>
            </div>
            <hr/>
            <form className='calendar-container' onSubmit={handleAppointment}>
                <h1 className='calendar-head'>Select a Day</h1>
                <Calendar className='calendar-view-container'
                    minDate={new Date(2024, 6, 21)}
                    maxDate={new Date(2029, 7, 21)}
                    showNeighboringMonth={true} name='date'
                    value={appointment.date} onChange={handleChangeDate}
                />
                <div className='time-picker-container'>
                    <input value={appointment.time} onChange={handleInput} name='time' className='timer-input' type='time'/>
                </div>
                <div className='description-and-favourite-container'>
                    <textarea value={appointment.description} onChange={handleInput} name='description' className='text-note' placeholder='type here short note...' rows={8} cols={50}></textarea>
                    <div className='favourite-container'>
                        <h3 htmlFor='favourite'>Favourite: </h3>
                        <div className='favourite-input-container'>
                            <input type='radio' name='favourite' value='yes' id='yes'onChange={handleInput} checked={appointment.favourite === 'yes'}/>
                            <label htmlFor='yes'>Yes</label>
                        </div>
                        <div className='favourite-input-container'>
                            <input type='radio' name='favourite' value='no' id='no' onChange={handleInput} checked={appointment.favourite === 'no'}/>
                            <label htmlFor='no'>No</label>
                        </div>

                    </div>
                </div>
                <button type='submit' className='book-btn'>Book</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default BookAppointments
