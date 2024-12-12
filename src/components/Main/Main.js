import React from 'react'
import './Main.css'
import discover from './peopleIcon.png'
import messageIcon from './messageIcon.png'
import requestIcon from './requestsIcon.png'
import statusIcon from './statusIcon.jpeg'
import profileIcon from './profileIcon1.webp'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Main() {
  let state=useLocation()
  state=state.state;
  //console.log(state)
  let navigate=useNavigate();
  function discoverPeople(){navigate(`/discoverPeople/${state.userName}`,{state:state.userName})}
  function feed(){navigate(`/Feed/${state.userName}`,{state:state.userName})}
  return (
    <div className='row MainPage'>
        <div className='col-lg-1 taskbar'>
            <div className='col-lg-12'>
              <p>{state.userName}</p>
                <img className='statusbarIcon' src={messageIcon}></img>
                <img className='statusbarIcon' src={statusIcon}></img>
                <img onClick={feed} className='statusbarIcon' src={requestIcon}></img>
                <img onClick={discoverPeople} className='statusbarIcon' src={discover}></img>
                <img  className='statusbarIcon' src={profileIcon}></img>
            </div>
        </div>
        <div className='col-lg-4 contacts'></div>
        <div className='col-lg-7 chatdashboard'></div>
    </div>
  )
}

export default Main