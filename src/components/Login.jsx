import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLock, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { CgArrowRight } from 'react-icons/cg';
import logo from '../assets/logo.png';
import './Login.css';

const emptyCredentials = {
    email: "",
    password: "",
};

const Login = ({ onLogin  }) => {

    const [credentials, setCredentials] = useState(emptyCredentials);
    const [requiredField, setRequiredField] = useState({ email: false, password: false });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (!credentials.email || !credentials.password) {
            if (!credentials.password) setRequiredField({ ...requiredField, password: true });
            if (!credentials.email) setRequiredField({ ...requiredField, email: true });
            setErrorMessage('Please fill in all required fields.');
            return;
        }
        setLoading(true);

        // Simulate a successful login after a short delay
        setTimeout(() => {
      setLoading(false);
      onLogin(); // Call the onLogin callback to set isLoggedIn to true
    }, 1000);
  };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRequiredField({ ...requiredField, [name]: false });
        setErrorMessage('');
        setCredentials({ ...credentials, [name]: value });
    };

    return (
        <main className="w-full h-fit pb-8 md:pb-0 px-4 md:px-24 lg:px-50 relative z-0 bg-[#141F29]">
            <div className="w-full h-[17.5vh] relative z-20 flex justify-center items-center lg:justify-start">
                <img
                    src={logo}
                    alt="Hubnex Logo"
                    className='w-40'
                />
            </div>
            <div className="w-full min-h-[82.5vh] relative z-20 grid grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-x-24 gap-y-8 md:gap-y-10">
                <div className='w-full space-y-4 sm:w-4/5 md:w-3/4 lg:w-full'>
                    <h6 className='text-2xl md:text-4xl text-white font-gilroy-bold leading-loose'>
                        Welcome To Vikrant
                    </h6>
                    <hr className='w-28 h-[1px] bg-white border-0 rounded' />
                    <p className='text-lg md:text-xl text-gray-400 font-gilroy-medium'>
                        Sign in to access your account and unlock a world of personalized experiences tailored just for you
                    </p>
                </div>
                <div className='w-full'>
                    <form
                        onSubmit={handleOnSubmit}
                        style={{ background: 'rgba(255, 255, 255, .06)' }}
                        className='w-full sm:w-4/5 md:w-3/4 lg:w-full h-fit mx-auto px-12 py-8 space-y-8 shadow-2xl rounded'
                    >
                        <div className='space-y-2'>
                            <h4 className='text-2xl text-white font-gilroy-semi-bold'>
                                Login
                            </h4>
                            <p className='text-base text-gray-400 font-gilroy-medium'>
                                Sign in to your account to continue.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <div className='space-y-2'>
                                <label className='w-full flex justify-between items-center' htmlFor="email">
                                    <span className='text-base text-gray-600 font-gilroy-semi-bold'>
                                        Email address <span className='text-red-400'>*</span>
                                    </span>
                                    {requiredField.email && (
                                        <span className='text-xs text-red-400 font-gilroy-medium tracking-wide'>
                                            Required!
                                        </span>
                                    )}
                                </label>
                                <div className='flex items-center overflow-hidden bg-[#141F29] rounded-sm shadow'>
                                    <div className='min-w-[3.5rem] h-12 grid place-items-center'>
                                        <AiOutlineUser size={20} color='#fff' />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={credentials.email}
                                        onChange={handleChange}
                                        id="email"
                                        className='admin__login__input flex-1 h-12 text-base text-white placeholder:text-gray-400 font-gilroy-semi-bold placeholder:font-gilroy-medium bg-transparent outline-none'
                                        placeholder='name@example.com'
                                    />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <label className='w-full flex justify-between items-center' htmlFor="password">
                                    <span className='text-base text-gray-600 font-gilroy-semi-bold'>
                                        Password <span className='text-red-400'>*</span>
                                    </span>
                                    {requiredField.password && (
                                        <span className='text-xs text-red-400 font-gilroy-medium tracking-wide'>
                                            Required!
                                        </span>
                                    )}
                                </label>
                                <div className='flex items-center overflow-hidden bg-[#141F29] rounded-sm shadow'>
                                    <div className='min-w-[3.5rem] h-12 grid place-items-center'>
                                        <AiOutlineLock size={20} color='#fff' />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        id="password"
                                        className='admin__login__input flex-1 h-12 text-base text-white placeholder:text-gray-400 font-gilroy-semi-bold placeholder:font-gilroy-medium bg-transparent outline-none'
                                        placeholder='Password'
                                    />
                                </div>
                            </div>
                            <div className='pt-2 grid grid-cols-2 items-center'>
                                <button
                                    type="submit"
                                    className='w-40 h-12 flex justify-center items-center gap-x-2 bg-indigo-600 hover:bg-indigo-500 rounded-full'
                                >
                                    {loading ? (
                                        <AiOutlineLoading3Quarters size={20} color='#fff' className='animate-spin' />
                                    ) : (
                                        <>
                                            <span className='text-sm text-white font-gilroy-semi-bold'>
                                                Sign In
                                            </span>
                                            <CgArrowRight size={24} color='#fff' />
                                        </>
                                    )}
                                </button>
                                <div className={`text-center ${errorMessage ? 'block' : 'hidden'}`}>
                                    <p className='text-sm text-red-400 font-gilroy-semi-bold tracking-wide leading-normal'>
                                        {errorMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
