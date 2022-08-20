import React, { useEffect, useRef, useState } from 'react';
import BottomNav from './BottomNav';

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

    console.log(currentState)
    const component = (crs) => {
        switch (crs) {
            // case 'home': return<Home navH={navh}/>;
            // case 'carbon': return<Carbon navH={navh} setCurrentState={setCurrentState}/>;
            // case 'issue': return<Issue navH={navh} setCurrentState={setCurrentState}/>;
            // case 'account': return <Account />
            // default: return<Home navH={navh}/>;
        }

    }

    return (
        <>
            <BottomNav reference={n} currentState={currentState} setCurrentState={setCurrentState} />
        </>
    )


}