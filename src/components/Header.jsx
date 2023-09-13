import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import testImg from '../assets/logo.png'
import { Outlet, useNavigate } from 'react-router-dom';
import SideNavMobile from './SideNavMobile';
import MenuIcon from '@mui/icons-material/Menu';
// import Login from './Login';
const Header = ({ setLogout, roles }) => {

  const userName = localStorage.getItem('name')
  const [navbar, setNavbar] = useState(false)

  const navigate = useNavigate()
const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('roles');
  window.location.reload();
  setLogout(true);
};



  return (
    <>
      <div className='w-full flex flex-col gap-y-5 px-2 sm:px-10'>
        <div className='w-full h-fit relative border-b border-b-white'>
          <div className="w-full h-24 flex items-center justify-between">
            <button onClick={() => setNavbar((prev) => !prev)} className='lg:hidden'>
              <MenuIcon className='text-white' fontSize='large' />
            </button>
            <div className='flex flex-1 justify-end'>
              <div className='relative flex items-center gap-x-6'>
                <span className='text-sm text-white font-gilroy-medium'>
                  Hi, Piyush
                </span>
                <button onClick={handleLogout} className='w-24 h-10 grid place-items-center bg-red-500 hover:bg-red-600 rounded-sm'>
                  <span className='text-sm text-white font-gilroy-semi-bold'>
                    Logout
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Outlet />
      <SideNavMobile navbar={navbar} setNavbar={setNavbar} />
    </>
  );
};

export default Header;