import React from 'react';

const Login = () => {
    return (
        <section className='flex-center h-[100dvh] w-full '>
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
                            <form className=' w-full md:pr-16 flex-center flex-col gap-3'>
                                <div className=' w-full'>
                                    <label htmlFor="username" className=' text-sm text-cyan-700'>User ID <span className='text-pink-600'>*</span> </label> <br/>
                                    <input type="text" placeholder='Enter User Name'
                                    className=' bg-white p-1.5 border border-b-gray-300 w-full mb-2' /><br/>
                                    {/* <small className='error'>This field is required</small> */}
                                </div>
                                <div className=' w-full'>
                                    <label htmlFor="username" className=' text-sm text-cyan-700'>Password <span className='text-pink-600'>*</span> </label> <br/>
                                    <input type="text" placeholder='Enter Password'
                                    className=' bg-white p-1.5 border border-b-gray-300 w-full mb-2' /><br/>
                                    {/* <small className='error'>This field is required</small> */}
                                </div>
                                <button className=' text-center w-full rounded bg-pink-500 my-4 text-white py-1.5'>Login</button>
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
