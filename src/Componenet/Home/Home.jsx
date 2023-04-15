import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';

const Home = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const provide = new GithubAuthProvider()

    const [logUser, setLogUser] = useState(null)

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setLogUser(user)
            })
            .catch(error => {
                console.log("error", error.massage)
            })
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, provide)
            .then(result => {
                const userGit = result.user;
                setLogUser(userGit)
            })
            .catch(error => {
                console.log(error.massage)
            })
    }
    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                // console.log(result)
                setLogUser(null)
            })
            .catch(error => {
                console.log(error.massage)
            })
    }
    return (
        <div className='text-center'>
            <h3 className='mb-5 mt-3'>Welcome to My Home</h3>
            {
                logUser ?
                    <button className='btn btn-danger me-3 fw-semibold' onClick={handleLogOut}>Log out</button> :
                    <>
                        <button className='btn btn-primary me-3 fw-semibold' onClick={handleGoogleLogin}>Google Login</button>
                        <button className='btn btn-danger me-3 fw-semibold' onClick={handleGithubLogin}>Github Login</button></>

            }

            <div className='mt-3'>
                {
                    logUser && <div>
                        <h3>Name: {logUser?.displayName}</h3>
                        <p>Email: {logUser?.email}</p>
                        <img src={logUser?.photoURL} alt="" />
                    </div>
                }
            </div>
        </div>
    );
};

export default Home;