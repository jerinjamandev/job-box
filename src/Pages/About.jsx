import React from 'react';
import DocumentTitle from '../Hook/DocumentTitle';

const About = () => {
    return (
        <div className='lg:px-10 md:px-6 px-5 my-6'>
            <DocumentTitle title='About | Job Box'></DocumentTitle>
            <div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-blue-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-blue-500">Our Company</span>
            </h2>
            <p className="text-gray-700">
            At Job Box, we connect passionate job seekers with the right opportunities. Our mission is to simplify the job-hunting process through a user-friendly platform, secure authentication, and real-time updates. Whether you're an employer or a candidate, we’re here to make recruitment faster, easier, and more effective.
            </p>
        </div>
    </div>
</div>
        </div>
    );
};

export default About;