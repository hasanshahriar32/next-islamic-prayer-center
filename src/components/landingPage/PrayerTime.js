import React from 'react';
import { FaMosque } from 'react-icons/fa';
import { MdSunnySnowing } from 'react-icons/md';
import { PiMosqueFill } from 'react-icons/pi';
import { PiSunHorizonBold } from 'react-icons/pi';
import { GiNightSleep } from 'react-icons/gi';
import { PiClockAfternoonFill } from 'react-icons/pi';
import styles from '../../styles/landing.module.css'

const PrayerTime = () => {
    return (
    
        <div className={`bg-[url("https://www.sunnism.com/wp-content/uploads/2023/05/What-is-Namaz-in-Islam.jpg")] z-0 text-white bg-no-repeat bg-cover py-20 ${styles.imageOverlay}`} > 

             <div className="container mx-auto md:px-24 lg:px-8 relative z-30">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold  md:mx-auto">
                Today’s Prayer Times
                </h2>
                <p>islamic: 14 rabi al awwal 1445 ah </p>
                <p>monday october 9 2023</p>
             
            </div>
            <div className="grid grid-cols-2 gap-2 row-gap-2 mb-10 sm:grid-cols-3 lg:grid-cols-6">
                
                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <FaMosque className='text-6xl'></FaMosque>
                </div>
                <h6 className="font-semibold text-2xl">Fazar</h6>
                <h6 className="font-xl text-zinc-500">5.51 am</h6>
                </div>


                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <MdSunnySnowing className='text-6xl'></MdSunnySnowing>
                </div>
                <h6 className="font-semibold text-2xl">sunrise</h6>
                <h6 className="font-xl text-zinc-500">5.51 am</h6>
                </div>


                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <PiMosqueFill className='text-6xl'></PiMosqueFill>
                </div>
                <h6 className="font-semibold text-2xl">Fazar</h6>
                <h6 className="font-xl text-zinc-500">5.51 am</h6>
                </div>


                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <PiClockAfternoonFill className='text-6xl'></PiClockAfternoonFill>
                </div>
                <h6 className="font-semibold text-2xl">Fazar</h6>
                <h6 className="font-xl text-zinc-500">5.51 am</h6>
                </div>


                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <PiSunHorizonBold className='text-6xl'></PiSunHorizonBold>
                </div>
                <h6 className="font-semibold text-2xl">Fazar</h6>
                <h6 className="font-xl text-zinc-500">5.51 am</h6>
                </div>

                <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-24 sm:h-24">
                   <GiNightSleep className='text-6xl'></GiNightSleep>
                </div>
                <h6 className="font-semibold text-2xl">Fazar</h6>
                <h6 className="font-xl text-zinc-500">5.51 am</h6>
                </div>

            </div>
            
            </div>
        </div>
  );
};
export default PrayerTime;