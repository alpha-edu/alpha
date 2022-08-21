import React from 'react';

export default function AnnouncementCard({ title, deadline, desc }) {

    return (
        <>
            <div className='my-3 mx-auto shadow-lg drop-shadow-md bg-bright-purple bg-opacity-100 w-11/12 rounded-xl h-fit felx flex-col items-center justify-around p-1 px-4'>
                <div className='text-left mt-1 text-xl font-semibold'>{title}</div>
                <div className='text-left mb-1'>Deadline: {deadline}</div>
                <div className='text-justify my-2'>{desc}</div>
            </div>
        </>
    )
}