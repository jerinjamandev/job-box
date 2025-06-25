import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebase.init';

const Forget = () => {

    const handlereset=(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        console.log(email,'click');

        sendPasswordResetEmail(auth, email)
        .then(()=>{
            toast.success('cheack ur mail')
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div>
               <div>
            {/* <DocumentTitle title='Login | Job Box'></DocumentTitle> */}
            <div className="hero  min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-xl'>reset password</h2>
                        <form onSubmit={handlereset} className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                           
                            <button className="btn bg-blue-400 text-white mt-4">submit</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Forget;