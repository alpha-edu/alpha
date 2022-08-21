import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LoginStudent from "../utils/LoginStudent";
import LoginTeacher from "../utils/LoginTeacher";
import logo from './../public/logo.svg'
export default function LoginPage({ setLoginState }) {

  const [user, setUser] = useState("student");

  useEffect(() => {
    localStorage.setItem("userType", user)
    console.log(user)
  }, [user])

  const form = useRef(null);

  const handelSubmit = async (e) => {

    e.preventDefault()

    const data = new FormData(form.current)

    console.log(form.current.email.value)
    console.log(form.current.password.value)

    // if (user === "student") {
    //   const response = await LoginStudent(form.current.email.value, form.current.password.value)
    //   try {
    //     if (result.tokenState === true) {
    //       localStorage.setItem("userToken", result.token);
    //       localStorage.setItem("email", result.email);
    //       console.log(result)
    //       window.location.reload();
    //     }
    //   }
    //   catch (e) {
    //     console.log(e)
    //   }
    // }
    // else if (user === "teacher") {
    //   const response = await LoginTeacher(form.current.email.value, form.current.password.value)
    //   try {
    //     if (result.tokenState === true) {
    //       localStorage.setItem("userToken", result.token);
    //       localStorage.setItem("email", result.email);
    //       console.log(result)
    //       window.location.reload();
    //     }
    //   }
    //   catch (e) {
    //     console.log(e)
    //   }
    // }

    localStorage.setItem("LOGINSTATE", true)
    window.location.reload();


  }
  return (
    <main className="flex flex-col items-center justify-center bg-white w-full h-full md:w-[50rem]">
      <div className="flex flex-col items-center rounded-lg overflow-hidden shadow-lg justify-center bg-blue-new bg-opacity-5 w-[80%] pt-8">
        <Image
          src={logo}
          width={"120rem"}
          height={"120rem"}
        />
        <h2 className="mb-4 mt-8 text-center text-3xl font-extrabold text-brown">
          Welcome!! <br />Login to start journey
        </h2>

        <div className=" my-4 w-2/3 h-12 flex justify-between items-stretch border border-gray-500 bg-white rounded-xl">
          <button
            onClick={() => setUser("student")}
            className={`${user === "student" ? "bg-royal-blue text-white" : ""
              } w-1/2 font-semibold rounded-lg`}
          >
            Student
          </button>
          <button
            onClick={() => setUser("teacher")}
            className={`${user === "teacher" ? "bg-royal-blue text-white" : ""
              } w-1/2 font-semibold rounded-lg`}
          >
            Faculty
          </button>
        </div>

        <form ref={form} onSubmit={handelSubmit} className=" my-4 flex flex-col px-8 mt-4 md:w-[70%] w-full items-center">
          <label className="my-2 flex flex-col justify-between w-full">
            <span className="font-light text-sm text-gray-600">Email</span>
            <input
              type="email"
              name="email"
              required
              className="h-8 border border-gray-500 rounded-lg px-1 "
            />
          </label>

          <label className="my-2 flex flex-col justify-between w-full">
            <span className="font-light text-sm text-gray-600">
              Password
            </span>
            <input
              type="password"
              name="password"
              required
              className="h-8 border border-gray-500 rounded-lg px-1 "
            />
          </label>

          <a
            href="#"
            className="my-2 font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot Password
          </a>
          <input
            type="submit"
            value="LOGIN"
            className='bg-royal-blue bg-opacity-80 hover:bg-opacity-100 rounded-md w-full p-3 text-white font-semibold my-4'
          />

        </form>
      </div>
    </main>
  );
}
