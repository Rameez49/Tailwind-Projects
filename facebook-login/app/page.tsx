"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter()

  const handleLogin = (e:any)=>{
    e?.preventDefault()
      console.log("email", email)
      console.log("passwaord", password)
      localStorage.setItem("userData", JSON.stringify({email, password}));
       router.push("/home")
  }
  return (
    <>
      <div className="bg-gray-100 h-screen  flex justify-center items-center">
        <div className=" w-1/2 px-10">
          <Image
            src={"/images/facebook-logo.png"}
            alt={"Image Loading"}
            width={300}
            height={100}
          />
          <p className="text-3xl -mt-10">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        {/* 2 Part Right Side  */}
        <div className="bg-white py-6 px-8 flex flex-col rounded-xl w-1/3 shadow-lg shadow-gray-400">
          <form onSubmit={handleLogin}>
          <input
            className="my-2 border border-1 border-gray-300 px-3 py-3 rounded-lg focus:outline-1 outline-blue-500"
            type="text"
            placeholder="Email or phone number"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            className="my-2 border border-1 border-gray-300 px-3 py-3 rounded-lg focus:outline-1 outline-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br/>
          <button className="my-2 bg-blue-500 p-3 rounded-lg text-white font-bold text-lg ">
            Login
          </button>
          </form>
          <Link
            className="text-center my-2 text-blue-400 text-sm font-semibold"
            href={"/"}
          >
            Forgot Password?{" "}
          </Link>
          <hr className="my-2" />
          <button className="my-2 bg-green-600 rounded-lg text-white font-bold p-3 w-fit self-center">
            Create new account
          </button>
        </div>
      </div>
    </>
  );
}
