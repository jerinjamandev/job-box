import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DocumentTitle from 'react-document-title-hook';


const Companydetails = () => {
    const data=useLoaderData()
    const {id}=useParams()

    const [company,setcompany]=useState({})

    const [selectedjob,setselectedjob]=useState(null)


     useEffect(()=>{
        const finddata=data.find(company=>company.id==id)
       setcompany(finddata)
     },[data,id])



    return (
        <div>
            <div className="px-6 py-10 max-w-4xl mx-auto">
            <DocumentTitle title= {`${company?.name}| Job Box`}></DocumentTitle>

      {/* Company Info */}
      <div className="mb-10 text-center">
        <img src={company?.logo} alt={company?.name} className="mx-auto h-24 mb-4" />
        <h2 className="text-3xl font-bold">{company?.name}</h2>
        <p className="text-gray-600">{company?.location}</p>
        <p className="text-gray-600">{company?.industry}</p>
      </div>

      {/* Job List */}
      <h3 className="text-xl font-semibold mb-4">Available Jobs</h3>
      <div className="grid gap-5">
        {company?.jobs?.map(job => (
          <div
            key={job.id}
            className="border border-gray-300 p-4 rounded-md shadow-sm flex flex-col md:flex-row md:items-center justify-between"
          >
            <div>
              <h4 className="text-lg font-bold">{job.title}</h4>
              <p className="text-sm text-gray-600">Job Location: {job.location}</p>
              <p className="text-sm text-gray-600">Type: {job.jobType}</p>
              <p className="text-sm text-gray-600">Salary: {job.salary}</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-0">
              <button
                onClick={() => setselectedjob(job)}
                className="bg-blue-200 text-gray-700 px-4 py-2 rounded hover:bg-blue-300"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Job Details Modal */}
      {selectedjob && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-xl">
            <h2 className="text-2xl font-bold mb-2">{selectedjob.title}</h2>
            <p className="text-sm text-gray-600 mb-1">Location: {selectedjob.location}</p>
            <p className="text-sm text-gray-600 mb-1">Type: {selectedjob.jobType}</p>
            <p className="text-sm text-gray-600 mb-1">Salary: {selectedjob.salary}</p>
            <p className="text-sm text-gray-600 mb-4">{selectedjob.description}</p>
            <ul>
                <p className='text-sm text-gray-600 mb-1 font-bold'>Job Requirements</p>
                {
                  selectedjob?.requirements.map(req=>(
                        <li className='text-sm text-gray-600 mb-1'>{req}</li>
                    ))
                }
            </ul>

            <div className="flex justify-between mt-4">
              <a
                href={company?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply
              </a>
              <button
                onClick={() => setselectedjob(null)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
        </div>
    );
};

export default Companydetails;