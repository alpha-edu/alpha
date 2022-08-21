import React from 'react';
import {GrHomeRounded, GrCalendar, GrQr, GrNotification, GrUser} from 'react-icons/gr'
export default function BottomNav({ reference, currentState, setCurrentState }) {
    return(
        <nav ref={reference} className='absolute bottom-0 left-1/2 translate-x-[-50%] bg-blue-new bg-opacity-5 md:max-w-[50rem] w-full h-16 py-1 grid grid-cols-5 items-center justify-center shadow-xl rounded-3xl'>
            <div onClick={() => setCurrentState('home')} className='h-full text-[0.5rem] md:text-xs text-center'>
                {
                    currentState === 'home' ?
                        <div className=' h-full flex flex-col justify-evenly items-center w-3/4 rounded-3xl bg-rose-red bg-opacity-70'>
                            <GrHomeRounded color='red' size="1rem" />
                            HOME
                        </div> :
                        <div className='h-full flex flex-col justify-evenly items-center w-3/4 rounded-3xl'>
                            <GrHomeRounded size="1rem" />
                            HOME
                        </div>
                }
            </div>
            <div onClick={() => setCurrentState('timeTable')} className='h-full text-[0.5rem] md:text-xs text-center'>
                {
                    currentState === 'timeTable' ?
                        <div className='h-full flex  flex-col justify-evenly items-center w-3/4 rounded-3xl bg-rose-red bg-opacity-70'>
                            <GrCalendar color='blue' size="1rem" />
                            TIME TABLE
                        </div> :
                        <div className='h-full flex  flex-col justify-evenly items-center w-3/4 rounded-3xl'>
                            <GrCalendar size="1rem" />
                            TIME TABLE
                        </div>
                }
            </div>
            <div onClick={() => setCurrentState('scan')} className='h-full text-[0.5rem] md:text-xs text-center'>
                {
                    currentState === 'scan' ?
                        <div className='h-full flex  flex-col justify-evenly items-center w-3/4 rounded-3xl bg-rose-red bg-opacity-70'>
                            <GrQr color='blue' size="1rem" />
                            SCAN
                        </div> :
                        <div className='h-full flex  flex-col justify-evenly items-center w-3/4 rounded-3xl'>
                            <GrQr size="1rem" />
                            SCAN
                        </div>
                }
            </div>
            <div onClick={() => setCurrentState('notification')} className='h-full text-[0.5rem] md:text-xs text-center'>
                {
                    currentState === 'notification' ?
                        <div className='h-full flex  flex-col justify-evenly items-center w-3/4 rounded-3xl bg-rose-red bg-opacity-70'>
                            <GrNotification color='blue' size="1rem" />
                            NOTIFICATIONS
                        </div> :
                        <div className='h-full flex  flex-col justify-evenly items-center w-3/4 rounded-3xl'>
                            <GrNotification size="1rem" />
                            NOTIFICATIONS
                        </div>
                }
            </div>
            <div onClick={() => setCurrentState('account')} className='h-full text-[0.5rem] md:text-xs text-center'>
                {
                    currentState === 'account' ?
                        <div className='h-full flex  flex-col justify-evenly items-center w-3/4 rounded-3xl bg-rose-red bg-opacity-70'>
                            <GrUser color='blue' size="1rem" />
                            ACCOUNT
                        </div> :
                        <div className='h-full flex  flex-col justify-evenly items-center w-3/4 rounded-3xl'>
                            <GrUser size="1rem" />
                            ACCOUNT
                        </div>
                }
            </div>
        </nav>
    )
}