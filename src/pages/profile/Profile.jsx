import "./profile.css";
import { useEffect,useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router";
import axios from 'axios'

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({})
  const userName = useParams().username;
   useEffect(() => {
    const fetchUser = async () => {
     const res = await axios.get(`/api/users?userName=${userName}`);
      setUser(res.data)
    }
    fetchUser()
  },[userName])
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "persons/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                 src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "persons/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.userName}</h4>
              <span className="profileInfoDesc">{ user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed userName={userName} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
