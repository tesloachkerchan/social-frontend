import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthContext'
export default function Topbar() {
  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to='/' style={{textDecoration:'none'}}>
          <span className='logo'>KerSocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className='searchIcon'/>
          <input placeholder='search for posts or friends' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home Page</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">9+</span>
          </div>
          <Link to='/messager'>
            <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          </Link>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">9+</span>
          </div>
        </div>
        <Link to={`/profile/${user.userName}`}>
           <img src={user.profilePicture? PF + user.profilePicture:  PF + "persons/noAvatar.png"} alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  )
}
