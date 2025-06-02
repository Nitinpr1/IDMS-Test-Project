import React, { useContext, useState } from 'react';
import axios from "axios";
import { ConfigContext } from '../../Context/ConfigContext';
import Loader from '../../Components/Loader';

const Login = () => {
    const {apiUrl} = useContext(ConfigContext);
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({user_name: "", password: ""});
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
    event.preventDefault();
    const errorsList = validateForm()
    console.error('handleNextTab 1', errorsList)
    if (Object.keys(errorsList).length > 0) {
        setErrors(errorsList);
        return;
    }
    setLoading(true);
    axios.post(`${apiUrl}User/Login`,{ user_name: loginData?.user_name, password: loginData?.password })
    .then((response)=> {
        setLoading(false);
        const data = response.data;
        if (data.success) {
            localStorage.setItem("username", data?.user?.name);
            localStorage.setItem("token", data?.token);
            window.location.href = '/';
        } else {
            setLoading(false);
        }
    })
    .catch ((error) => {
        console.log("Error during login:====>", error);
        setLoading(false);
    });
}

  const handleInput = (e) => {
    const {name , value} = e.target;
    // console.log("name, value",name, value);
    setLoginData({
        ...loginData,
        [name]: value,
    });
    setErrors({
        ...errors,
        [name]: "",
    });

  }

  const validateForm = () => {
    const errors = {};
    // console.log("loginData.user_name,loginData.password",loginData.user_name,loginData.password);
    if(!loginData.user_name){
        errors.user_name = "This field is required";
    }
    if(!loginData.password){
        errors.password = "This field is required";
    }
    return errors;
  }

    return (
        <section className='flex-center h-[100dvh] w-full '>
            {loading && (<Loader/>)}
            <div className='relative border border-pink-700 rounded md:w-[58.5%] w-full md:h-auto h-[70%] md:mx-0 mx-3 overflow-hidden'>
                <img className='h-full w-full' src="/Media/hex-pattern.svg" alt="hex-pattern" />
                <div className='absolute w-full h-full top-0 left-0'>
                    <div className='w-full h-[83%] grid md:grid-cols-2 grid-cols-1'>
                        <div className='flex-center'>
                            <div className=' w-[60%] h-[60%]'>
                                <img className='mt-8 h-full w-full' src="/Media/idms-logo.svg" alt="" />
                            </div>
                        </div>
                        <div className=' flex-center md:w-full w-[80%]'>
                            <form onSubmit={handleSubmit} className=' w-full md:pr-16 flex-center flex-col gap-3'>
                                <div className=' w-full'>
                                    <label htmlFor="user_name" className=' text-sm text-cyan-700'>User ID <span className='text-pink-600'>*</span> </label> <br/>
                                    <input id='user_name' name='user_name' type="text"
                                    onChange={handleInput}
                                    placeholder='Enter User Name'
                                    className=' bg-white p-1.5 border border-b-gray-300 w-full mb-2' /><br/>
                                    { errors.user_name && (<small className='error'>{errors.user_name}</small>)}
                                </div>
                                <div className=' w-full'>
                                    <label htmlFor="password" className=' text-sm text-cyan-700'>Password <span className='text-pink-600'>*</span> </label> <br/>
                                    <input id='password' name='password'
                                    onChange={handleInput} 
                                    type="password" placeholder='Enter Password'
                                    className=' bg-white p-1.5 border border-b-gray-300 w-full mb-2' /><br/>
                                    { errors.password && (<small className='error'>{errors.password}</small>)}
                                </div>
                                <button type='submit' className=' cursor-pointer text-center w-full rounded bg-pink-500 my-4 text-white py-1.5'>{loading ? "Loading..." : "Login"}</button>
                            </form>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 text-center mt-4'>
                        <p className='text-gray-700 fw-bolder text-sm'>All Rights Reserved 2022</p>
                        <div className='md:pr-16 '>
                            <label className='text-gray-700 fw-bold text-sm'>Forgot Password ?</label>
                            <a href="/forgot" className=' text-pink-600'>Click Here</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Login;
