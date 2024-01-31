import './feed.css'
import { useContext, useEffect,useState } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'
import {AuthContext} from '../../context/AuthContext'
function Feed({userName}) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const fetchData = async () => {
      const res = userName ?
        await axios.get('http://localhost:8800/api/post/profile/'+ userName) :
        await axios.get('http://localhost:8800/api/post/timeline/'+user._id);
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    }
    fetchData()
  },[userName,user._id])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {
          posts.map(p => (
            <Post key={p._id} post={p} />
          ))
        } 
      </div>
    </div>
  )
}

export default Feed
