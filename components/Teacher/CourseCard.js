import React from 'react';

export default function CourseCard({ courseCode, title }) {

    return (
        <>
            <div className='my-3 mx-auto shadow-lg drop-shadow-md bg-bright-purple bg-opacity-100 w-11/12 rounded-xl h-fit felx flex-col items-center justify-around p-1 px-4'>
                <div className='text-left mt-1 text-xl font-semibold'>{courseCode}</div>
                <div className='text-left mb-1'> {title}</div>
            </div>
        </>
    )
}