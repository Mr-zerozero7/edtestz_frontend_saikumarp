import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import BookingCards from '../BookingCards';
import './index.scss'

const apiConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE'
}

const AppointmentsHistory = () => {
    const [apiResponse, setApiResponse] = useState({
        status: apiConstants.initial,
        data: null,
        errorMsg: ''
    })

    useEffect(() => {
      const getAppointments = async () => {
        setApiResponse({
            status: apiConstants.inProgress,
            data: null,
            errorMsg: ''
        })
        const appointementsUrl = 'http://localhost:4000/api/appointments/'
        // const appointementsUrl = 'https://edtestz-appointment-backend-saikumarp-1.onrender.com/api/appointments/'
        const options={
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${Cookies.get('jwt_token')}`
            }
        }
        try {
            const response = await fetch(appointementsUrl, options);
            const responseData = await response.json();
            if(response.ok){
                setApiResponse(prevApiResponse => ({...prevApiResponse,
                    status: apiConstants.success,
                    data: responseData,
                }))
                console.log(responseData)
            }
        } catch (error) {
            console.log('List Data fetching Error')
        }
      }
    
      getAppointments();
    }, [])
    

    const renderLoadingView = () => (
        <div className='loading-container'>
            <div className='spinner'>...</div>
        </div>
    )

    const renderSuccessView =() =>{
        return(
        apiResponse.data.map(eachCard => (
            <BookingCards cardDetails={eachCard} key={eachCard.id} />
        ))
    )
    }

    const renderFailureView = () =>(
        <div className='failure-view-container'>
            <h1 className='failure-heading'>Data Fetching Failure</h1>
            <p className='failure-note'>Error Message: {apiResponse.errorMsg}</p>
        </div>
    )

    const renderDataView = () => {
        switch (apiResponse.status) {
            case apiConstants.inProgress:
                return renderLoadingView();
            case apiConstants.success:
                return renderSuccessView();
            case apiConstants.failure:
                return renderFailureView();
            default:
                return null
        }
    }

  return (
    <div className='appointement-main-container'>
      <div className='appointement-view'>
        {renderDataView()}
      </div>
    </div>
  )
}

export default AppointmentsHistory
