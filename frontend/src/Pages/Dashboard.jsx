import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { sales1, chart1, chart2, options } from '../Constants/Constants';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Dashboard = () => {
    return (
        <div className='navShadow w-[88dvw]  h-[93dvh]'>
            <header className='right-header navShadow flex align-items-center w-full h-[6dvh] bg-amber-200 mb-4'>
                <div className='w-1/3 flex align-items-center gap-2 px-5'>
                    <div className=' flex-center'>
                        <img className=' w-[13px]' src="/Media/Icon_home.svg" alt="" />
                    </div>
                    <div  className=' flex-center'>
                        <img className=' opacity-65 ' src="/Media/redstroke.svg" alt="" />
                    </div>
                    <div  className=' flex-center'>
                       <img className=' w-[16px]' src="/Media/icon_previous.svg" alt="" />
                    </div>
                    <div  className=' flex-center'>
                        <img className=' opacity-65 ' src="/Media/redstroke.svg" alt="" />
                    </div>
                    <nav className=' flex-center navigationText text-gray-600'>Masters</nav>
                    <div  className=' flex-center'>
                        <img className=' opacity-65 ' src="/Media/redstroke.svg" alt="" />
                    </div>
                    <nav className=' flex-center navigationText text-gray-600'>Transactions</nav>
                    <div  className=' flex-center'>
                        <img className=' opacity-65 ' src="/Media/redstroke.svg" alt="" />
                    </div>
                    <nav className=' flex-center navigationText text-gray-600'>Reports</nav>
                </div>


                <div className=' flex-center w-[35%] text-xl'>
                    <h1 className=' text-[#007daf]'>Sales Overview</h1>
                </div>
            </header>
            <div className="flex-center mt-10 bg-white">
                <div className="flex-center w-full mx-4 bg-white">
                    <div className='flex-center'><FontAwesomeIcon icon={faChevronLeft} className="text-[#007daf] text-2xl"/></div>
                    <div className=' w-full grid grid-cols-6 gap-4 py-2 px-3 mx-4'>
                        {sales1.map((val)=>{
                            return (
                                <div className=' flex flex-col justify-between rounded overflow-hidden cardShadow'>
                                    <div className='flex flex-col justify-center align-items-center  px-2 pt-2 text-center align-align-items-center'>
                                        <span className='cardTitle font-medium '>{val.name}</span>
                                        <span className={`cardValue ${val.color}`}>{val.value}</span>
                                    </div>
                                    <div className=' bg-cyan-700 h-[0.4rem]'></div>
                                </div>
                            )
                        })}
                    </div>
                    <div  className='flex-center'><FontAwesomeIcon icon={faChevronRight} className="text-[#007daf] text-2xl" /></div>
                </div>
            </div>
  
            <div class="flex flex-wrap justify-center mt-2">
                <div class="w-[89%] m-auto custom-blue-border">
                    <div class="h-full bg-white cardShadow rounded overflow-hidden">
                    <div class="pb-3 pt-0.5 ms-3 flex items-start">
                        <small class="text-xs font-semibold">Note: D – Domestic</small>
                    </div>
                    <div className=' bg-cyan-700 h-[0.4rem]'></div>
                    </div>
                </div>
            </div>
            <div className="chart-container flex flex-wrap justify-center gap-6 px-4 py-6">
                <div className='flex-center'><FontAwesomeIcon icon={faChevronLeft} className="text-[#007daf] text-2xl" /></div>
                <div className=" relative w-full md:w-[45%] overflow-hidden bg-white cardShadow px-4 pb-7 pt-5 rounded custom-blue-border">
                    <h3 className="text-center font-semibold mb-2 cardTitle">Monthly Domestic SO Trend [In Lakh]</h3>
                    <div style={{ width: '33dvw' }}>
                        <Bar data={chart1} options={options} />
                    </div>
                    <div className=' absolute left-0 bottom-0 w-full bg-cyan-700 h-[0.4rem]'></div>
                </div>
                <div className=" relative w-full md:w-[45%] overflow-hidden bg-white cardShadow px-4 pb-7 pt-5 rounded custom-blue-border">
                    <h3 className="text-center font-semibold mb-2 cardTitle">Monthly Domestic Tax Invoice Trend [In Lakh]</h3>
                    <div style={{ width: '33dvw' }}>
                        <Bar data={chart2} options={options} />
                    </div>
                    <div className=' absolute left-0 bottom-0 w-full bg-cyan-700 h-[0.4rem]'></div>
                </div>
                <div  className='flex-center'><FontAwesomeIcon icon={faChevronRight} className="text-[#007daf] text-2xl" /></div>
            </div>
        </div>
    );
}

export default Dashboard;
