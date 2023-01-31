import "./register.css";
import { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Password don't match");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                const res = await axios.post("/auth/register", user);
<<<<<<< HEAD
                history.push("/login")
=======
                res && history.push("/login")
>>>>>>> a44ae8b... fix context
            } catch (err) {
                console.log(err)
            }
        }
    }
<<<<<<< HEAD
=======

>>>>>>> a44ae8b... fix context
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Facebook.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" className="loginInput" ref={username} required />
                        <input placeholder="Email" className="loginInput" ref={email} required type="email" />
                        <input placeholder="Password" className="loginInput" ref={password} required type="password" minLength="6" />
                        <input placeholder="Password Again" className="loginInput" ref={passwordAgain} required type="password" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <Link to={'/login'} style={{ position: 'relative', right: '-90px', boxSizing: 'border-box' }}>
                            <button className="loginRegisterButton">
                                Log into Account
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div >
    );
}