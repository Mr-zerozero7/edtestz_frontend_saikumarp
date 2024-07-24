import React from 'react'
import {format} from 'date-fns'
import './index.scss'

const BookingCards = (props) => {
    const {cardDetails} = props
    const formatedDate = format(cardDetails.date, 'yyyy-MM-dd');
    const createdAtDate = format(cardDetails.createdAt, 'yyyy-MM-dd hh:mm:ss')
    const shortId = cardDetails.id.slice(0,8);
    const timeString = new Date(`${formatedDate}T${cardDetails.time}`)
    const timeFormat = format(timeString , 'hh:mm a')
  return (
    <div className='booking-card-container'>
      <p className='booking-id'><span>Booking ID: </span>{shortId}</p>
      <p className='booking-date'><span>Date: </span>{formatedDate}</p>
      <p className='booking-time'><span>Time: </span>{timeFormat}</p>
      <p className='booking-description'><span>Des: </span>{cardDetails.description}</p>
      <p className='createdDate'><span>Created At: </span>{createdAtDate}</p>
      <div className='bottom-line'></div>
    </div>
  )
}

export default BookingCards
