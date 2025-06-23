import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin';
// import DocumentTitle from '../Hook/DocumentTitle';

const Login = () => {
    return (
        <div>
            {/* <DocumentTitle title='Login | Job Box'></DocumentTitle> */}
            <div className="hero  min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-xl'>Login Your Account</h2>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-blue-400 text-white mt-4">Login</button>
                        </fieldset>
                        <p>Don't Have Any Account <Link to='/register' className='text-blue-500 font-bold'>Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;