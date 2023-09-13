import React from 'react'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LayersIcon from '@mui/icons-material/Layers';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const SideNavMobile = ({ navbar, setNavbar }) => {

    const [cmsOpen, setCmsOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

    const handleCmsDropdown = ()=>{
      setCmsOpen((prev)=> !prev);
    }

    const handleFormDropdown = ()=>{
      setFormOpen((prev)=> !prev);
    };

  return (
    <div className={` ${navbar ? ' translate-x-full ' : 'translate-x-0'} duration-200 ease-in transition-all absolute right-full w-full md:w-2/5 bg-[#141F29] h-full flex flex-col py-5 items-center overflow-y-auto `}>
      <div className='w-full px-5 mx-auto flex gap-2 items-center'>
        <Link to='/' onClick={()=> setNavbar(false)}><img src={logo} alt="logo" width={100} /></Link>
        {/* <Link to='/' className=' text-3xl text-white font-bold'>hubnex</Link> */}
      </div>
      <span onClick={()=> setNavbar(false)} className=' text-white absolute top-7 right-5'><CloseIcon fontSize='large'/></span>
      <div className=' flex flex-col w-full h-full items-center py-5 gap-8 '>
        <div className=' w-full px-5 m-auto h-full flex flex-col gap-8 text-base text-gray-300 font-semibold'>
          <hr className=' w-full border-[1px] border-white'/>

          <div className=' flex flex-col gap-4 items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>
            <LayersIcon/>
              <div className=' flex flex-col w-full gap-5'>
                <span onClick={handleCmsDropdown} className=' cursor-pointer flex items-center'>CMS <span >{cmsOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></span>
                {cmsOpen &&
                <div className=' flex flex-col gap-2 '>
                  <Link to='/terms-and-conditions' onClick={()=> setNavbar(false)}>Terms and conditions</Link>
                  <Link to='/privacy-policy' onClick={()=> setNavbar(false)}>Privacy Policy</Link>
                  <Link to='/data-protection' onClick={()=> setNavbar(false)}>Data Protection</Link>
                </div>
                }
              </div>
            </div>

          </div>
          <div className=' flex gap-4 flex-col items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>
              <BackupTableIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <span onClick={handleFormDropdown} className=' cursor-pointer flex items-center'>Forms <span >{formOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></span>
              {formOpen &&
                <div className=' flex flex-col gap-2 '>
                  <Link to='/forms/invest' onClick={()=> setNavbar(false)}>Startup Programme</Link>
                  <Link to='/forms/contact' onClick={()=> setNavbar(false)}>Let's Connect</Link>
                </div>
                }
              </div>
            </div>
          </div>
     

          <div className=' flex gap-4 flex-col items-center'>
            <div className=' flex gap-4 items-start w-full'>
              <ManageAccountsIcon/>
              <div className=' flex flex-col w-full gap-5'>
              <Link to='/manage-roles' onClick={()=> setNavbar(false)} className=' flex items-center'>Manage Roles</Link>
              </div>
            </div>
          </div>

          <div className=' flex gap-4 items-center'>
            <FileOpenIcon/>
            <Link to='/testimonials' onClick={()=> setNavbar(false)}>Testimonial</Link>
          </div>
          
          <hr className=' w-full border-[1px] border-white'/>
        </div>
      </div>

    </div>
  )
}

export default SideNavMobile