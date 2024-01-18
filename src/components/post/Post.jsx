import './post.css'
import { MoreVert } from '@mui/icons-material';
function Post() {
  return (
      <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src='/assets/persons/tesloach.jpg'
              alt=""
            />
            <span className="postUsername">
              my name
            </span>
            <span className="postDate">11-12-2023</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">text</span>
          <img className="postImg" src='/assets/persons/tesloach.jpg' alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="like.png" alt="" />
            <img className="likeIcon" src="heart.png"  alt="" />
            <span className="postLikeCounter"> 32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">19 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
