import React, { useEffect, useRef, useState } from 'react';
import Account from './Account';
import BottomNav from './BottomNav';
import StudentHome from './Home';
import MarkAttendance from './MarkAttandance';
import TimeTable from './TimeTable';

export default function Student() {

    const n = useRef(null);

    const calcH = (eleRef) => {
        return eleRef.current.clientHeight;
    }

    const [navh, setNavh] = useState(0);

    useEffect(() => {
        setNavh(calcH(n));
    }, [n]);

    const [currentState, setCurrentState] = useState('home')

    console.log(navh)
    const component = (crs) => {
        switch (crs) {
            case 'home': return <StudentHome navH={navh} />;
            case 'timeTable': return<TimeTable navH={navh}/>;
            case 'scan': return<MarkAttendance navH={navh} />;
            case 'account': return<Account navH={navh} />;
        }

    }

    return (
        <>
            {
                component(currentState)
            }
            <BottomNav reference={n} currentState={currentState} setCurrentState={setCurrentState} />
        </>
    )


}