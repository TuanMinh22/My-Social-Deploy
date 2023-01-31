import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext.js"
import { CircularProgress } from '@material-ui/core'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> a44ae8b... fix context

export default function Login() {
    const email = useRef();
    const password = useRef();
<<<<<<< HEAD
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
=======
    const { user, isFetching, dispatch } = useContext(AuthContext)
>>>>>>> a44ae8b... fix context

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }

<<<<<<< HEAD
=======
    const handleRegister = (e) => {
        e.preventDefault();
        window.location.replace('/register');
    }

>>>>>>> a44ae8b... fix context
    console.log(user)

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
                        <input placeholder="Email" type="email" className="loginInput" ref={email} required />
                        <input placeholder="Password" type="password" className="loginInput" ref={password} required minLength="6" />
                        <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="secondary" size="20px" /> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
<<<<<<< HEAD
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="secondary" size="20px" /> : "Create a New Account"}
=======
                        <button className="loginRegisterButton" onClick={handleRegister}>
                            {/* {isFetching ? <CircularProgress color="secondary" size="20px" /> : "Create a New Account"} */}
                            Create a New Account
>>>>>>> a44ae8b... fix context
                        </button>
                    </form>
                </div>
            </div>
<<<<<<< HEAD
        </div>
=======
        </div >
>>>>>>> a44ae8b... fix context
    );
}