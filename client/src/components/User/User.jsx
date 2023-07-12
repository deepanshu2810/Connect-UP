import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../actions/userAction';

const User = ({person}) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch()
  
  const [followings, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    // console.log(person._id);
    followings
      ? dispatch(unFollowUser(person._id, user))
      :
       dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
        <div>
            <img src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "defaultProfile.png"} alt=""
            className='followerImage' />
            <div className="name">
                <span>{person.firstname}</span>
              
                <span>{person.username}</span>

            </div>
        </div>
        <button className={
          followings ? "button fc-button UnfollowButton" : "button fc-button"
        } onClick={handleFollow}>
        {followings ? "Unfollow" : "Follow"}
        </button>
    </div>
  )
}

export default User