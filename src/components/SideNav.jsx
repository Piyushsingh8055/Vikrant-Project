import React, { useState } from 'react';
import logo from '../assets/logo.png';
import LayersIcon from '@mui/icons-material/Layers';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { Link } from 'react-router-dom';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import sales from './sales';

const SideNav = ({ navbar }) => {
  const [dashOpen, setDashOpen] = useState(false);
  const [crmOpen, setCrmOpen] = useState(false);
  const [approvalOpen, setApprovalOpen] = useState(false);

  const handleDashDropdown = () => {
    setDashOpen((prev) => !prev);
  };

  const handleCrmDropdown = () => {
    setCrmOpen((prev) => !prev);
  };

  const handleApprovalDropdown = () => {
    setApprovalOpen((prev) => !prev);
  };

  return (
    <div className='hidden w-[30%] bg-[#141F29] scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-900 h-full lg:flex flex-col items-center sticky left-0 top-0 overflow-y-auto'>
      <div className='w-[70%] h-28 relative mx-auto grid items-center border-b border-white'>
        <Link to='/'>
          <img src={logo} alt="logo" className='w-32'/>
        </Link>
      </div>
      <div className=' flex flex-col w-full h-full items-center py-5 gap-8 '>
        <div className=' w-[70%] m-auto h-full flex flex-col gap-8 text-base text-gray-300 font-semibold'>
          <div className=' flex flex-col gap-4 items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>  
              <LayersIcon/>
              <div className=' flex flex-col w-full gap-5'>
                <span onClick={handleDashDropdown} className=' cursor-pointer flex items-center'>Dashboard <span >{dashOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></span>
                {dashOpen && (
                  <div className=' flex flex-col gap-2 '>
                    <Link to='/sales'>Sales</Link>
                    <Link to='/production'>Production</Link>
                    <Link to='/purchase'>Purchase</Link>
                    <Link to='/invebtory'>Inventory</Link>
                    <Link to='/hrm'>HRM</Link>
                    <Link to='/account'>Accounts</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className=' flex gap-4 flex-col items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>
              <FileOpenIcon/>
              <div className=' flex flex-col w-full gap-5'>
                <span onClick={handleCrmDropdown} className=' cursor-pointer flex items-center'>CRM <span >{crmOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></span>
                {crmOpen && (
                  <div className=' flex flex-col gap-2 '>
                    <Link to='/forms/invest'>Enquiry</Link>
                    <Link to='/EnquiryReview'>Enquiry Review</Link>
                    <Link to='/forms/contact'>Cost Estimation</Link>
                    <Link to='/forms/contact'>Quotation</Link>
                    <Link to='/forms/contact'>Control Review</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className=' flex gap-4 flex-col items-center w-full'>
            <div className=' flex gap-4 items-start w-full'>
              <BackupTableIcon/>
              <div className=' flex flex-col w-full gap-5'>
                <span onClick={handleApprovalDropdown} className=' cursor-pointer flex items-center'>Approvals <span >{approvalOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDown />}</span></span>
                {approvalOpen && (
                  <div className=' flex flex-col gap-2 '>
                    <Link to='/forms/invest'>Indent Approval</Link>
                    <Link to='/forms/contact'>PO Approval</Link>
                    <Link to='/forms/contact'>Budget Approval</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className=' flex gap-4 flex-col items-center'>
            <div className=' flex gap-4 items-start w-full'>
              <ManageAccountsIcon/>
              <div className=' flex flex-col w-full gap-5'>
                <Link to='/manage-roles' className=' flex items-center'>GST Reconciliation</Link>
              </div>
            </div>
          </div>

          <hr className='w-full h-[1px] border-0 bg-white'/>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
