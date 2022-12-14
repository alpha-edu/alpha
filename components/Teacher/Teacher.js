import { useEffect, useRef, useState } from 'react';
import Account from './Account';
import Announcement from './Announcement';
import Attendance from './Attendance';
import BottomNav from './BottomNav';
import TeacherHome from './Home';

export default function Teacher() {

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
            case 'home': return <TeacherHome navH={navh} />;
            case 'scan': return<Attendance navH={navh}/>;
            case 'notification': return<Announcement navH={navh}/>;
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