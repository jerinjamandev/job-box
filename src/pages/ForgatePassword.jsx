import React from 'react';
// import DocumentTitle from '../Hook/DocumentTitle';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import DocumentTitle from 'react-document-title-hook';


const ForgatePassword = () => {
    const handereset=(event)=>{
        event.preventDefault()

        const email = event.target.email.value
        sendPasswordResetEmail(auth,email)
        .then(()=>{
           toast.success('Check Your Mail')
           window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');
        }).catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div>
            <div>
                <DocumentTitle title='Forgot Password | Job Box'></DocumentTitle>
                <div className="hero  min-h-screen">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h2 className='text-center font-bold text-xl'>Forgot Your passwor </h2>
                            <form onSubmit={handereset} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />
                                <button className="btn bg-blue-400 text-white mt-4">Reset Password</button>
                            </form>
                            <p> <Link to='/register' className='text-blue-500 font-bold'>Login</Link></p>

                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ForgatePassword;
