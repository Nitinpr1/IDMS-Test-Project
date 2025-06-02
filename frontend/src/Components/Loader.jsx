import React from 'react';

const Loader = () => {
    return (
        <div className=' absolute z-50 flex-center w-[100dvw] h-[100dvh] bg-lightBlack'>
            <p className=' text-white opacity-100'>Loading...</p>
        </div>
    );
}

export default Loader;
