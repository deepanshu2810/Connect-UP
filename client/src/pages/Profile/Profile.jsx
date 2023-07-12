import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSlide from '../../components/PostSlide/PostSlide'
import RightSide from '../../components/RightSide/RightSide'
const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
            <ProfileCard location= "profilePage"/>
            <PostSlide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile