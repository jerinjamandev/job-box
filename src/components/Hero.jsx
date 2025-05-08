import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {

    return (
        <motion.div
            className=" p-6 rounded-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>



            <div>
                <div className="hero">
                    <div className="flex lg:flex-row-reverse flex-col items-center justify-center gap-24 w-full my-24 lg:px-10 md:px-7 px-5">
                        <img
                            src="https://b11-a9.vercel.app/assets/banner1-DkkHtpji.png"
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className="text-5xl font-bold">The <span className='text-blue-500'>Easiest Way </span><br />
                                to Get Your New <br />
                                Job</h1>

                            <p className='py-6'>Each month, more than 3 million job seekers <br />
                                turn to <br />
                                website in their search for work, making over <br />
                                140,000 <br />
                                applications every single day</p>

                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>


        </motion.div>

    );
};

export default Hero;