import React, { useState } from 'react';
import AnnouncementCard from './AnnouncementCard';
import ClassCard from './ClassCard';
// import AttendanceCard from './AttendanceCard';


export default function TeacherHome({ navH }) {

    const calcHeight = (eleRef) => {
        return eleRef.current.clientHeight + 20;
    }
    const [techoH, settechoH] = useState(0);
    const h = window.innerHeight;
    // const divH = (h - sudoH - 50);
    console.log(navH)

    return (
        <main className="flex flex-col px-6 pt-6 justify-start bg-orchid bg-opacity-5 w-full h-full md:w-[50rem] overflow-hidden" style={{ paddingBottom: navH }}>
            <div className='flex flex-col justify-start h-full overflow-y-scroll no-scrollbar'>
                <section className='my-4 flex max-h-20 items-center gap-3'>
                <img src="//joeschmoe.io/api/v1/male/random" className='rounded-full w-20 border bg-white drop-shadow-md'/>
                    <h1 className='flex flex-col items-start'>
                        <span className='text-gray-600 text-3xl font-medium'>
                            Welcome,
                        </span>
                        <span className='text-3xl font-semibold'>
                            Teacher
                        </span>
                    </h1>
                </section>

                <section className='my-4 bg-b-grey rounded-xl shadow-lg p-4 h-[50%]'>
                    <h2 className='text-2xl font-medium'>
                        Upcoming Classes
                    </h2>
                    <div className='mt-4 overflow-y-auto h-[85%]'>

                    <ClassCard subject={"Operating System"} time ={"9:00 am -11:00 am"} subjectCode={"CS1120"}/>
                    <ClassCard subject={"Intriduction to IOT"} time={"11:00 am -12:00 pm"} subjectCode={"EE1101"}/>
                    <ClassCard subject={"Cryptography"} time ={"1:00 pm -2:00 pm"} subjectCode={"CS1102"}/>
                    </div>

                </section>


                <section className='my-4 bg-b-grey rounded-xl shadow-lg p-4 h-[50%]'>
                    <h2 className='text-2xl font-medium'>
                        Anncouncements
                    </h2>
                    <div className='mt-4 overflow-y-auto h-[85%]'>
                        <AnnouncementCard title={"Sabrang"} deadline={"12/9/22"} desc={"Amet qui mollit et dolore ea id excepteur consectetur consequat aliqua ex exercitation."}/>
                        <AnnouncementCard title={"Sabrang"} deadline={"12/9/22"} desc={"Lorem non incididunt laboris minim non ex id amet pariatur."}/>
                        <AnnouncementCard title={"Sabrang"} deadline={"12/9/22"} desc={"Deserunt incididunt reprehenderit ea anim magna et qui Lorem pariatur dolore cupidatat officia aliquip sint."}/>
                    </div>

                </section>

            </div>
        </main>
    )
}