import "./message.css";
import { format } from "timeago.js";
<<<<<<< HEAD

export default function Message({ message, own }) {
=======
import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Message({ message, own }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [userCurrent, setUserCurrent] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(user)
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get("/users?userId=" + message.sender);
                setUserCurrent(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [message.sender])
>>>>>>> a44ae8b... fix context
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
<<<<<<< HEAD
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
=======
                    src={userCurrent.profilePicture ? PF + userCurrent.profilePicture : PF + "person/noAvatar.png"}
>>>>>>> a44ae8b... fix context
                    alt=""
                />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    );
}