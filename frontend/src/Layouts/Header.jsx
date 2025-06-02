import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ConfigContext } from '../Context/ConfigContext';

const Header = () => {
    const {user} = useContext(ConfigContext);
    console.log("user => ",user);
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = '/';
    }
    return (
        <header>
            <div className='w-[100dvw] h-[7.9dvh] navShadow pr-3 py-2.5 flex justify-between align-items-center gap-3'>
                <div className=' ml-6 flex-center gap-2'>
                    <img className={`w-[19px]`} src="/Media/idms-logo.svg" alt="" />
                    <div className={`navigationText fw-bolder text-nowrap text-pink-500`}>
                        IDMS Infotech Pvt. Ltd.
                    </div>
                </div>
                <div>
                    <span className=' navigationText text-cyan-700 flex-center'>Welcome - {user}</span>
                    <button onClick={handleLogout} className='cursor-pointer flex-center gap-1 text-center mr-2 px-2 pb-0.5 rounded bg-[#fa0096] text-sm text-white '>Logout <span className='ml-1'>
                    <FontAwesomeIcon icon={faPowerOff} className=' text-sm' /></span></button>
                </div>
            </div>
        </header>
    );
}

export default Header;
