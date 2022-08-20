import Head from 'next/head'
import Image from 'next/image'

import React, { useState } from 'react';
import LoginPage from '../components/LoginPage';
import Student from '../components/Student/Student';

export default function Home() {
  const [login, setLogin] = useState(false);

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

  if (login) {
    return (
      <>
        <Head>
          <title>Alpha</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Student />
      </>
    )
  }
}
