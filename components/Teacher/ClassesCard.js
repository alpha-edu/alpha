import React from 'react';

export default function AttendanceCard({ subject, subjectCode, time, roomNo }) {

    return (
        <>
            <div className='my-3 mx-auto shadow-lg drop-shadow-md bg-bright-purple bg-opacity-100 w-11/12 rounded-xl h-16  grid grid-cols-3 grid-rows-1 items-center justify-center p-1'>
                <div className='text-center'>{subject}</div>
                <div className='text-center'>{subjectCode}</div>
                <div className='text-center'>Time: {time}</div>
                <div className='text-center'>{roomNo}</div>
            </div>
        </>
    )
}