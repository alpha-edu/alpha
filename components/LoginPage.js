import { Input } from "postcss";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState("student");
  console.log("OKIII");
  return (
    <main className="flex flex-col items-center justify-center bg-pink-dirty w-screen">
      <div className="min-h-screen py-40 w-[80%]">
        <div className="flex flex-col items-center max-w-sm rounded-lg overflow-hidden shadow-lg justify-center bg-white">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text- brown">
              Welcome!!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>

          <div className="w-2/3 h-12 flex justify-between items-stretch border border-gray-500 rounded-md">
            <button
              onClick={() => setUser("student")}
              className={`${
                user === "student" ? "bg-blue-600 text-white" : ""
              } w-1/2 font-semibold`}
            >
              Faculty
            </button>
            <button
              onClick={() => setUser("teacher")}
              className={`${
                user === "teacher" ? "bg-blue-600 text-white" : ""
              } w-1/2 font-semibold`}
            >
              Student
            </button>
          </div>

          <form className="flex flex-col px-8 mt-4 w-full items-center">
            <div>
              <label className="flex flex-col justify-between w-full">
                <span className="font-light text-sm text-gray-600">Email</span>
                <input
                  type="email"
                  // value={fName}
                  // onChange={(e) => setFName(e.target.value)}
                  name="email"
                  required
                  className="h-8 border border-gray-500 rounded-lg px-1 "
                />
              </label>

              <label className="flex flex-col justify-between w-full">
                <span className="font-light text-sm text-gray-600">
                  Password
                </span>
                <input
                  type="password"
                  // value={fName}
                  // onChange={(e) => setFName(e.target.value)}
                  name="password"
                  required
                  className="h-8 border border-gray-500 rounded-lg px-1 "
                />
              </label>
            </div>

            <div className="flex flex-row items-center justify-between py-1 ">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot Password
              </a>
            </div>

            <div className="py-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
