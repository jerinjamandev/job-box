import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthpPovider';
import DocumentTitle from 'react-document-title-hook';


// import DocumentTitle from '../Hook/DocumentTitle';

const Login = () => {
    const { googleLogin, LoginUser ,user} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success(`${result.user.email} Login Successful`)
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    const handelLogin = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value


        LoginUser(email, password)
            .then(() => {
                toast.success('Login successful!');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    useEffect(()=>{
        if(user){
            navigate(from, { replace: true }); 
        }
    },[navigate,user])
    return (
        <div>
            <DocumentTitle title='Login | Job Box'></DocumentTitle>
            <div className="hero  min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-xl'>Login Your Account</h2>
                        <form onSubmit={handelLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="label">Password</label>
                            <div className='relative'>
                                <label className="label">Password</label>
                                <input required type={showPassword === false ? "password" : "text"} name='password' className="input" placeholder="Password" />
                                <span onClick={() => setShowPassword(!showPassword)} className='absolute top-9 right-7 text-xl transform -translate-y-1/2 z-40 text-gray-600 cursor-pointer '>{showPassword == false ? <FaRegEyeSlash /> : <FaEye />}</span>
                            </div>
                            <div><Link to='/forgot-password' className="link link-hover">Forgot password?</Link></div>
                            <button className="btn bg-blue-400 text-white mt-4">Login</button>
                        </form>
                        <p>Don't Have Any Account <Link to='/register' className='text-blue-500 font-bold'>Register</Link></p>

                        <div className='flex items-center justify-center gap-3 my-2'>
                            <button onClick={handelGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;