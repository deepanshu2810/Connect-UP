import React from "react";
import './Home.css'
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSlide from "../../components/PostSlide/PostSlide";
import RightSide from "../../components/RightSide/RightSide";
const Home = () =>{
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSlide/>
            <RightSide/>

        </div>
    )
}
export default Home

