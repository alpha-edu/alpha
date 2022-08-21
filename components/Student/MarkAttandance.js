import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function MarkAttendance({ navH }) {
    const calcHeight = (eleRef) => {
        return eleRef.current.clientHeight + 20;
    }
    const [sudoH, setsudoH] = useState(0);
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
                <QrReader
                    onResult={(res, err) => {
                        if (res) {
                            setQrData(res?.text)
                        }
                        else if (err) {
                            console.log(err);
                        }
                    }}
                    constraints={{ facingMode: "environment" }}
                    className="w-[80%] h-[60%]"
                />

            </div>
            <div className='flex justify-center'>
                <button 
                className='bg-royal-blue bg-opacity-80 hover:bg-opacity-100 rounded-md w-1/3 p-3 text-white font-semibold my-4'
                onClick={() => alert("Attendance marked for", qrData)}
                >
                    Submit
                </button>
            </div>
        </main>

    )
}