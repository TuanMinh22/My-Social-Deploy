import './online.css'
// import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'

export default function Online({ user }) {
    // const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const res = await axios.get(`users/${post.userId}`)
    //         setUser(res.data);
    //     }
    //     fetchUser();
    // }, [post.userId])

    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={PF + user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}
