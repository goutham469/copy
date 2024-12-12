import React from 'react'
import './UserCard.css'

function UserCard(props) {
    console.log(props)
    console.log(props.using)
    function sendRequest(){
      let a = document.querySelector("")
       let user = fetch(`http://localhost:4000/users/?user_name=${a}`).then(data=>data.json()).then(data=>console.log(data));
       console.log(props.user_name)

    }
  return (
    <div  className='Childdiv'>
        <h4>{props.userData.First_name} {props.userData.Last_name}</h4>
        <p className={props.using}>{props.userData.user_name}</p>
        <button  className='btn btn-success'>send request</button>
    </div>
  )
}

export default UserCard