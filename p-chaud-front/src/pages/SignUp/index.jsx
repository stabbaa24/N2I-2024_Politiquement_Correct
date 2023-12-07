import React, {useRef} from 'react';

const SignUp = () => {

    const username = useRef('');
    const email = useRef('');
    const password = useRef('');
    const confirmPassword = useRef('');

    const handleSignIn = () => {

    }

    return (
        <div>
            <input placeholder={"username"} onChange={(e)=>{username.current=e.target.value}}/>
            <input placeholder={"email"} onChange={(e)=>{email.current=e.target.value}}/>
            <input placeholder={"password"} onChange={(e)=>{password.current=e.target.value}}/>
            <input placeholder={"confirm password"} onChange={(e)=>{confirmPassword.current=e.target.value}}/>
            <button onClick={handleSignIn}>Sign Up</button>
        </div>
    );
};

export default SignUp;
