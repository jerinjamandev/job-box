import React, { Suspense } from 'react';
import Calculate from '../components/Calculate';
import Companysection from '../components/Companysection';
import Hero from '../components/Hero';
import Howitworks from '../components/Howitworks';
import Subscription from '../components/Subscription';
import DocumentTitle from 'react-document-title-hook';


    const jobdatafetching=fetch('/Jobdata.json')
    .then(res=>res.json())
const Home = () => {
    return (
        <div>
             <DocumentTitle title="Home | Job Box" />

            <Hero></Hero>
            <Howitworks></Howitworks>
        <Suspense fallback={<h2>Loading.....</h2>}>  
        <Companysection jobdatafetching={jobdatafetching}></Companysection>
        </Suspense>
            <Calculate></Calculate>

            <Subscription></Subscription>
        </div>
    );
};

export default Home;