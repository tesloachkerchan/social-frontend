import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Feeds</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Vidoe</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventNoteIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>show more</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/persons/tesloach.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">tes</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/persons/tesloach.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">tes</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/persons/tesloach.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">tes</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/persons/tesloach.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">tes</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/persons/tesloach.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">tes</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/persons/tesloach.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">tes</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
