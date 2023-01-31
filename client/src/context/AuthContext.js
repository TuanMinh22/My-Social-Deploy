<<<<<<< HEAD
import { createContext, useReducer } from 'react';
=======
import { createContext, useEffect, useReducer } from 'react';
>>>>>>> a44ae8b... fix context
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    // user: {
    //     _id: "60d15f676ddd2c2674c592b9",
    //     username: "MinhNT",
    //     email: "minh@gmail.com",
    //     profilePicture: "person/2.jpeg",
    //     coverPicture: "post/2.jpeg",
    //     isAdmin: false,
    //     follows: [],
    //     followings: []
    // },
<<<<<<< HEAD
    user: null,
=======
    user: JSON.parse(localStorage.getItem("user")),
>>>>>>> a44ae8b... fix context
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
<<<<<<< HEAD

=======
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
>>>>>>> a44ae8b... fix context
    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}