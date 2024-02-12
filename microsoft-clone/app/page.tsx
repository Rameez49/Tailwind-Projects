import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center lg:order-2">
            <div className="  p-4 cursor-pointer lg:hidden">
              <div className="line h-0.5 w-6 bg-black my-1"></div>
              <div className="line h-0.5 w-6 bg-black my-1"></div>
              <div className="line h-0.5 w-6 bg-black my-1"></div>
            </div>
            <div className="lg:order-2">
              <div className="search lg:hidden">search</div>
            </div>
          </div>
          <div className="lg:flex lg:flex-row-reverse ">
            <Image
              className=" lg:pt-3 lg:ml-14  lg:w-28 lg:order-1"
              src={"/images/logo.png"}
              alt="load..."
              width={"90"}
              height={"80"}
            />
            <div className="  hidden lg:block lg:mt-3.5 lg:space-x-8 lg:text-sm ">
              <Link className="lg:ml-8" href={"/"}>
                Microsoft 365
              </Link>
              <Link className="lg:mr" href={"/"}>
                Office
              </Link>
              <Link className="lg:mr" href={"/"}>
                Copilot
              </Link>
              <Link className="lg:mr" href={"/"}>
                Windows
              </Link>
              <Link className="lg:mr" href={"/"}>
                Support
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center lg:order-3">
            <div>
              <div className="search mx-2 hidden lg:block">Search</div>
            </div>
            <div>
              <div className="cart mx-2">Cart</div>
            </div>
            <div>
              <div className="profile mr-2">Profile</div>
            </div>
          </div>
        </div>
      </header>
      {/* Navbar Complete */}

      {/* <div className="slider">
        <div className="left">
          <Image 
          alt={"slider image"}
          src={"/images/slider1.jpg"}
          width={"200"}
          height={"200"}
          />
        </div>
        <div className="right"></div>Name
      </div> */}
      <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>
      </div>
    </>
  );
}
