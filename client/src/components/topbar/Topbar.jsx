import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'
import { useContext } from "react"
export default function Topbar() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
<<<<<<< HEAD
    const { user } = useContext(AuthContext)

=======
    const { user, dispatch } = useContext(AuthContext)
    const handleLogout = async () => {
        dispatch({ type: "LOGOUT" });
        window.location.replace("/login")
    }
>>>>>>> a44ae8b... fix context
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className="logo">Facebook</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input type="text" className="searchInput" placeholder="Search for friend, post or video" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
<<<<<<< HEAD
                    <span className="topbarLink">Timeline</span>
=======
                    <span className="topbarLink" onClick={handleLogout}>{user ? "Log Out" : ""}</span>
>>>>>>> a44ae8b... fix context
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Link to={"/messenger/" + user._id} style={{ textDecoration: "none", color: "white" }}>
                            <Chat />
                        </Link>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    )
}
