import React, { useRef, useState } from 'react';

export default function Announcement({ navH }) {
    const calcHeight = (eleRef) => {
        return eleRef.current.clientHeight + 20;
    }
    const [sudoH, setsudoH] = useState(0);
    const h = window.innerHeight;
    const divH = (h - sudoH - 50);
    console.log(navH)

    const form = useRef(null)
    const handelSubmit = (e) => {

        e.preventDefault()

        console.log(form.current.title.value)
        console.log(form.current.deadline.value)
        console.log(form.current.details.value)

        const obj = "title : " + form.current.title.value + "\n" +"deadline : " + form.current.deadline.value + "\n" + "details : " + form.current.details.value
        

        alert(obj)

    }

    return (
        <main className="flex flex-col px-6 pt-6 justify-start bg-orchid bg-opacity-5 w-full h-full md:w-[50rem] overflow-hidden" style={{ paddingBottom: navH }}>

            <h1 className='flex flex-col items-center text-3xl font-semibold'>
                Make Announcement
            </h1>
            <form ref={form} onSubmit={handelSubmit} className=" my-4 flex flex-col px-8 mt-4 md:w-[70%] w-full items-center">
                <label className="my-2 flex flex-col justify-between w-full">
                    <span className="font-light text-sm text-gray-600">Title</span>
                    <input
                        type="text"
                        name="title"
                        required
                        className="h-8 border border-gray-500 rounded-lg px-1 "
                    />
                </label>
                <label className="my-2 flex flex-col justify-between w-full">
                    <span className="font-light text-sm text-gray-600">Deadline</span>
                    <input
                        type="date"
                        name="deadline"
                        required
                        className="h-8 border border-gray-500 rounded-lg px-1 "
                    />
                </label>
                <label className="my-2 flex flex-col justify-between w-full">
                    <span className="font-light text-sm text-gray-600">Details</span>
                    <input
                        type="text"
                        name="details"
                        required
                        className="h-8 border border-gray-500 rounded-lg px-1 "
                    />
                </label>
                <input
                    type="submit"
                    value="SUBMIT"
                    className='bg-royal-blue bg-opacity-80 hover:bg-opacity-100 rounded-md w-full p-3 text-white font-semibold my-4'
                />
            </form>
        </main>
    )
}