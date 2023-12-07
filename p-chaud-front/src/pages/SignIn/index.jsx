import React, {useRef} from 'react';
import {useUser} from "../../contexts/UserContext";

const dummySignIn = {
    username: "pchaud",
    password: "pchaud"
}

const SignIn = () => {

    const {signIn} = useUser();
    const username = useRef('');
    const password = useRef('');

    const handleSignIn = () => {
        if (username.current === dummySignIn.username && password.current === dummySignIn.password) {
            console.log("Sign in successful");
            signIn(dummySignIn);
        } else {
            console.log("Sign in failed");
        }
    }

    return (
        <div>
            <input placeholder={"username"} onChange={(e)=>{username.current=e.target.value}}/>
            <input type={"password"} placeholder={"password"} onChange={(e)=>{password.current=e.target.value}}/>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
