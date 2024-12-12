import React from 'react'
import './FindFriends.css'
import { useLocation } from 'react-router-dom'

function FindFriends() {
    let location = useLocation()
    let user = location.state
    console.log(user)
    
    function ab(){fetch(`http://localhost:4000/users/?user_name=${user}`).then(data=>data.json()).then(data=>console.log(data))}
  return (
    <div>
        <h2>FindFriends we requested them</h2>
        <div onClick={()=>{ab()}} className='displayFriendRequests'>
            <p>hello</p>
        </div>
    </div>
  )
}

export default FindFriends