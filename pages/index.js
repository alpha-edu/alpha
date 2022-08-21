import Head from 'next/head'
import Image from 'next/image'

import React, { useEffect, useState } from 'react';
import LoginPage from '../components/LoginPage';
import Student from '../components/Student/Student';
import Teacher from '../components/Teacher/Teacher';

export default function Home() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const val = localStorage.getItem("LOGINSTATE");
    console.log(val);
    if (val !== null && val !== 'undefined' && val !== '' && val !== "false") {
      setLogin(true)
      sessionStorage.clear()
    }
    else {
      setLogin(false)
    }
  }, []);

  if (!login) {
    return (
      < >
        <Head>
          <title>Alpha</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className='w-screen h-screen flex justify-center bg-b-grey'>
          <LoginPage setLoginState={setLogin} />
        </body>
      </>
    )

  }

  const afterLoginComponent = () => {
    if (localStorage.getItem("userType") === 'student') return <Student />
    else if (localStorage.getItem("userType") === 'teacher') return <Teacher />

  }
  if (login) {
    return (
      <>
        <Head>
          <title>Alpha</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className='w-screen h-screen flex justify-center bg-b-grey'>

          {
            afterLoginComponent()
          }
        </body>
      </>
    )
  }
}
