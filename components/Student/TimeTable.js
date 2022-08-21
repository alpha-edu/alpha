import React, { useState } from 'react';

export default function TimeTable({navH}) {
    const calcHeight = (eleRef) => {
        return eleRef.current.clientHeight + 20;
    }
    const [sudoH, setsudoH] = useState(0);
    const h = window.innerHeight;
    const divH = (h - sudoH - 50);
    console.log(navH)
    return (
        <main className="flex flex-col px-6 pt-6 justify-start bg-orchid bg-opacity-5 w-full h-full md:w-[50rem] overflow-hidden" style={{ paddingBottom: navH }}>
            <h1 className='flex flex-col items-center text-3xl font-semibold'>
                Time Table
            </h1>

        </main>

    )
}