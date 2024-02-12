"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


export default function Home() {

    const router = useRouter()
    const handleLogout = () => {
       localStorage.removeItem("userData")
       router.push("/")
       console.log("logout")
    }

  return (
    <>
    <div>Home Page</div>
    <button onClick={handleLogout} className='bg-red-500 text-white rounded-lg px-5 py-2'>Logout</button>
    </>
  )
}
