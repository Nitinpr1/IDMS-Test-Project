import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <div className='w-[100dvw] h-[7.9dvh] navShadow pr-3 py-2.5 flex justify-end align-items-center gap-3'>
                <span className=' navigationText text-cyan-700 flex-center'>Welcome - Functional Support</span>
                <button className=' flex-center gap-1 text-center mr-2 px-2 pb-0.5 rounded bg-[#fa0096] text-sm text-white '>Logout <span className='ml-1'>
                    <FontAwesomeIcon icon={faPowerOff} className=' text-sm' /></span></button>
            </div>
        </header>
    );
}

export default Header;
