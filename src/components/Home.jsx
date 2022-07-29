import React, { useEffect, useState } from 'react';
import './home.css'
import Profile from './Profile';

import Spinner from "./Spinner"
const Home = () => {
    // set and get user info
    const [users, setusers] = useState([])
    const [userdetails, setuserdetails] = useState({})

    useEffect(() => {
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => res.json())
            .then(data => 
                {
                    setusers(data);
                console.log(data);})
    }, [])

    const userDetails = (userinfo) => {
        setuserdetails(userinfo)
    }

    const userset = (userinfo) => {
        setuserdetails(userinfo)
    }

    return (
        <div>

            <div className='main'>
                <div className='userlist'>
                    <br />
                    <br />
                    <h1 className='title'>USERS LIST</h1>
                    <br />
                    <br />
                    {
                        users.length ? <>
                            {
                                users?.map(user =>
                                    <div onClick={() => userDetails(user)} onclick={() => userset()}>
                                        <div className='card'>
                                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                                            <h3 className='user-name'>{user?.profile?.username}</h3>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                            :
                            <div className='loading-div'>
                           <Spinner/>
                            </div>
                    }
                </div>
                        <Profile userdetails={userdetails}/>
            </div >

        </div>
    );
};

export default Home;