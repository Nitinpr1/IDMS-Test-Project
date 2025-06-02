// import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { ConfigContext } from '../Context/ConfigContext';
import ProtectedRoutes from '../Routes/ProtectedRoutes';
import Header from './Header';
import { navigationBar } from '../Constants/Constants';

const AppLayout = () => {
    // const {test} = useContext(ConfigContext);
    return (
        // <ProtectedRoutes>
            <section className=' h-[100dvh] overflow-hidden'>
                <Header/>
                <div className='flex  '>
                    <aside className=' flex flex-col justify-between w-[12.5dvw] h-[93dvh]'>
                        <div>
                            {
                            navigationBar?.map((val, idx)=>{ 
                                return (
                                    <div className={` navShadow h-[6.17dvh] flex align-items-center gap-2 pl-3 py-1.5 text-sm text`}>
                                        <div className={`${idx===0 && "ml-1"} flex-center`}>
                                            <img className={`w-[${val.width}]`} src={val?.icon} alt="" />
                                        </div>
                                        <div className={`w-[0.01rem]  ${val.bgColor}`} />
                                        <div className={`navigationText fw-bolder text-nowrap flex-center ${val.color}`}>
                                            {val?.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className=' h-[0.15rem] bg-cyan-700'></div>
                        <div className={`navShadow flex align-items-center gap-2 pl-3 py-2.5 text-sm text`}>
                            <div className=''>
                                <img className={`w-[17px]`} src="/Media/idms-logo.svg" alt="" />
                            </div>
                            <div className=' w-[0.01rem] bg-amber-400' />
                            <div className={`navigationText fw-bolder text-nowrap text-pink-500`}>
                                Powered by IDMS
                            </div>
                        </div>
                    </aside>
                    <main className=''>
                        <Outlet/>
                    </main>
                </div>
            </section>
        // </ProtectedRoutes>
    );
}

export default AppLayout;
