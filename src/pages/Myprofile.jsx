import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import DocumentTitle from '../Hook/DocumentTitle';
import { AuthContext } from '../provider/AuthpPovider';
import DocumentTitle from 'react-document-title-hook';


const Profile = () => {
  const { user,setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

   

  const handleUpdate = () => {
    navigate('/update-profile');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded shadow text-center">
         <DocumentTitle title='My Profile | Job Box'></DocumentTitle>
      <img
        src={user?.photoURL}
        alt="User"
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{user?.displayName}</h2>
      <p className="text-gray-600 mb-4">{user?.email}</p>

      <button
        onClick={handleUpdate}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;