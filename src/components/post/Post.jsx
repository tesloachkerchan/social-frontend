import './post.css'
import { MoreVert } from '@mui/icons-material'
import axios from 'axios';
import {format} from 'timeago.js'
import { useState,useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
function Post({ post }) {
  const [like,setLike] = useState(post.like.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext)
  useEffect(() => {
    setIsLiked(post.like.includes(currentUser._id))
  },[currentUser._id,post.like])

  useEffect(() => {
    const fetchUser = async () => {
     const res = await axios.get(`/api/users?userId=${post.userId}`);
      setUser(res.data)
    }
    fetchUser()
  },[post.userId])

  const likeHandler = async (e) => {
    e.preventDefault()
    try {
      await axios.put('/api/post/'+post._id+ '/like',{userId:currentUser._id})
    } catch (err) {
      
    }
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
      <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.userName}`}>
            <img
              className="postProfileImg"
              src= {user.profilePicture? PF+user.profilePicture: PF + "persons/noAvatar.png"}
              alt=""
            />
            </Link>
            <span className="postUsername">
              {user.userName}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={`${PF}heart.png`}  onClick={likeHandler}  alt="" />
            <span className="postLikeCounter"> {like}people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
