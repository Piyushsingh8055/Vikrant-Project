import React from 'react';
import SideNav from '../components/adminpage/SideNav';
import Header from '../components/adminpage/Header';
import AdminLogin from '../components/adminpage/AdminLogin';

const Admin = ({isLogged, userName, setIsLogged, setUserName}) => {

  return (
    <div className='flex w-full h-screen bg-black'>
      {isLogged ? (
        <>
          <SideNav  />
          <Header   />
        </>
      ) : (
         <AdminLogin />
      )}
    </div>
  );
}

export default Admin