import React, { useState } from 'react';
import Search from './Search';
import UserCard from './UserCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <div className="container mt-5">
      <Search setUserData={setUserData} />
      <UserCard userData={userData} />
      <ToastContainer />
    </div>
  );
};

export default App;
