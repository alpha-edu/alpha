import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function Attendance({ navH }) {
    const calcHeight = (eleRef) => {
        return eleRef.current.clientHeight + 20;
    }
    const [sudoH, setsudoH] = useState(0);
    const [classCode, setClassCode] = useState("");
    const h = window.innerHeight;
    const divH = (h - sudoH - 50);
    console.log(navH)


    const [qrData, setQrData] = useState("");

    return (
        <main className="flex flex-col px-6 pt-6 justify-start bg-orchid bg-opacity-5 w-full h-full md:w-[50rem] overflow-hidden" style={{ paddingBottom: navH }}>
            <h1 className='flex flex-col items-center text-3xl font-semibold'>
                Mark Attendance
            </h1>

            <div className='flex flex-col items-center'>
                <label className="my-2 flex flex-col justify-between w-2/3">
                    <span className="font-light text-sm text-gray-600">Class Code</span>
                    <input
                        type="text"
                        name="classCode"
                        value={classCode}
                        onChange={(e) => setClassCode(e.target.value)}
                        required
                        className="h-8 border border-gray-500 rounded-lg px-1 "
                    />
                </label>

                {
                    classCode === ""?null:<QRCode 
                        value={classCode}
                        className="my-20 scale-125"
                    />
                }

            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-royal-blue bg-opacity-80 hover:bg-opacity-100 rounded-md w-1/3 p-3 text-white font-semibold my-4'
                    onClick={() => console.log(qrData)}
                >
                    Submit
                </button>
            </div>
        </main>

    )
}