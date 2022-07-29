import React from 'react'
import "./profile.css"
const Profile = ({userdetails}) => {
  return (
    <div className='profile'>
        <br /><br />
    <h1 className='profile-title'>USER DETAILS</h1>
    <br /><br />
    <div className='user-details-info'>
        <div className='img-name'>
            <img className='user-details-img' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
            <div className='user-profile'>
            {
                userdetails.profile ? <p>{userdetails?.profile?.username}</p> : <p>User Name:</p>
            }
            {
                userdetails.profile ? <p className='details-boi'>{userdetails.Bio}</p> : <p className='details-boi'></p>
            }
        </div>
        </div>
        <div className='allDetails'>
            <small className='details-title'>Full Name:</small>
            {
                userdetails.profile ? <div className='full-name'>{`${userdetails?.profile?.firstName}  ${userdetails?.profile?.lastName}`}</div> : <div className='user-full-name'></div>
            }
        </div>
        <div className='allDetails'>
            <small className='details-title'>Job Title:</small>
            <div className='user-full-name'>{userdetails?.jobTitle}</div>
        </div>
        <div className='allDetails'>
            <small className='details-title'>Email:</small>
            <div className='user-full-name'>{userdetails?.profile?.email}</div>
        </div>
    </div>
</div>


  )
}

export default Profile