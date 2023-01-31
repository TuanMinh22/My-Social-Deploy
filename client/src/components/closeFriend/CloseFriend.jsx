<<<<<<< HEAD
=======
import { useContext } from 'react';
>>>>>>> a44ae8b... fix context
import './closeFriend.css'

export default function CloseFriend({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
<<<<<<< HEAD

=======
    
>>>>>>> a44ae8b... fix context
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
