import React, { useState } from 'react';

export default function Account({ navH }) {
    const calcHeight = (eleRef) => {
        return eleRef.current.clientHeight + 20;
    }
    const [sudoH, setsudoH] = useState(0);
    const h = window.innerHeight;
    const divH = (h - sudoH - 50);
    console.log(navH)
    return (
        <main className="flex flex-col px-6 pt-6 justify-between items-center bg-orchid bg-opacity-5 w-full h-full md:w-[50rem] overflow-hidden" style={{ paddingBottom: navH }}>
            <section className='my-4 flex flex-col justify-center max-h-20 items-center gap-3'>

                <img src="//joeschmoe.io/api/v1/male/random" className='rounded-full w-20 border bg-white drop-shadow-md' />
                <h1 className='flex flex-col items-center text-3xl font-semibold'>
                    Namish Khandelwal
                </h1>
            </section >

            <button
                className='bg-royal-blue bg-opacity-80 hover:bg-opacity-100 rounded-md w-2/3 p-3 text-white font-semibold my-4'
                onClick={() => {
                    localStorage.setItem("LOGINSTATE", false)
                    window.location.reload()
                }}                >
                LOG OUT
            </button>

        </main>

    )
}