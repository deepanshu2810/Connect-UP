import React from 'react'
import './PostSlide.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
const PostSlide = () => {
  return (
    <div className="PostSlide">
        <PostShare/>
        <Posts/>
    </div>
  )
}

export default PostSlide