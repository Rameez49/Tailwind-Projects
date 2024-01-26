import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <>
      {/* <body className="bg-gradient-to-t from-[#fbc2eb] to-[#a6e1ee] h-screen">
        <header className="bg-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <Image
                src={"/images/logo.png"}
                alt={""}
                width={"80"}
                height={"60"}
              />
            </div>
            <div className=" ">
              <ul className="flex items-center gap-[4vw] ">
                <li className="hover:text-gray-400">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link href={"#"}>Products</Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link href={"#"}>About</Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link href={"# "}>Solutions</Link>
                </li>
              </ul>
            </div>
            <div className=" flex items-center">
              <button className="bg-[#2360c9] text-white px-5 py-2 rounded-full hover:bg-[#92b5f1]">Sign In</button>
            </div>
          </nav>
        </header>
      </body>
       */}

<Navbar links={[{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }]} />
      {/* Rest of your page content */}
    </>
  );
}
