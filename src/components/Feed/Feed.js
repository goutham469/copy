import React from 'react'
import { useLocation } from 'react-router-dom'
import './Feed.css'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Feed() {
    const location = useLocation();
    const state1=location.state;
    console.log(state1)
    let navigate=useNavigate();
function findFriendRequests(){navigate('RequestedFriends',{state:state1})}
function requestedFriends(){navigate('FindFriends',{state:state1})}
function myFriends(){navigate('MyFriends',{state:state1})}
  return (
    <div className='row'>
        <div className='col-lg-3'>
            <div className='col-lg-12'></div>
            <div className='col-lg-12 ele1'>
                <h3 onClick={findFriendRequests} className='ele2'>Friend requests</h3>
            </div>
            <div className='col-lg-12 ele1'>
                <h3 onClick={requestedFriends} className='ele2'>Requested friends</h3>
            </div>
            <div className='col-lg-12 ele1'>
                <h3 onClick={myFriends} className='ele2'>My Friends</h3>
            </div>
        </div>
        <div className='col-lg-9'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Feed;