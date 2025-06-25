import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from '../Components/SocialLogin';
import { auth } from '../firebase.init';
// import DocumentTitle from '../Hook/DocumentTitle';

const Login = () => {
        const navigate=useNavigate()
        const handlesubmit=(event)=>{
            event.preventDefault()
            const email=event.target.email.value;
            const password=event.target.password.value;

            signInWithEmailAndPassword(auth, email, password)
            .then(userCredential=>{
                console.log(userCredential.user);
                toast.success('login successfully')
                navigate('/')
            })

            .catch(error=>{
                console.log(error.message);
                toast.error(error.message)
            })
        }
    return (
        <div>
            {/* <DocumentTitle title='Login | Job Box'></DocumentTitle> */}
            <div className="hero  min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-xl'>Login Your Account</h2>
                        <form onSubmit={handlesubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><Link to='/forget' className="link link-hover">Forgot password?</Link></div>
                            <button className="btn bg-blue-400 text-white mt-4">Login</button>
                        </form>
                        <p>Don't Have Any Account <Link to='/register' className='text-blue-500 font-bold'>Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;