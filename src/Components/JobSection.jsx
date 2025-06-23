import React, { use } from 'react';
import { Link } from 'react-router-dom';

const JobSection = ({ fetchJobData }) => {
    const jobs = use(fetchJobData)
    console.log(jobs);
    return (
        <div className="py-10 lg:px-10 md:px-7 px-5">
            <h2 className="text-2xl font-bold mb-6">Available Jobs</h2>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-1 gap-3'>
                {jobs.map(company => (
                    <div
                        key={company.id}
                        className="bg-white shadow-md  p-5 rounded-xl hover:shadow-xl transition"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="w-[45px] h-[45px] object-contain rounded"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {company.name}
                                </h3>

                            </div>
                        </div>

                        <div className="text-sm text-gray-600 space-y-1 mb-4">
                            <div className="flex items-center gap-2">
                                <span>{company.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>{company.industry}</span>
                            </div>
                        </div>

                        <Link to={`/company/${company.id}`}>  <button className="mt-auto w-full py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            View Details
                        </button></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobSection;