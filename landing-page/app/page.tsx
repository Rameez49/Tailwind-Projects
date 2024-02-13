import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <div className="lg:relative">
          <Image
            className=" w-screen h-screen  "
            alt="loading"
            src={"/images/developer.png"}
            width={"800"}
            height={"800"}
          />
          {/* <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-4xl font-bold text-white">Your Text Here</h1>
        </div> */}
          <div className="  absolute inset-x-72 inset-y-12 text-white font-semibold ">
            <p className=" text-5xl">
              Hi,<span className="text-2xl"> I am Rameez Ul Hassan</span>
            </p>
            
            <p className="text-5xl mt-5">
            Full Stack Developer
            </p>
          </div>
        </div>
        <div className="bg-black text-white text-center p-12 text-5xl font-semibold">
          Work, I Can Do For You
        </div>
        <div className=" flex justify-around m-12 mx-28 ">
        <div className="w-80 shadow-md shadow-gray-400 rounded-md">
          <Image className="mb-5"
          src={"/images/web.png"}
          alt="Image loading..."
          width={"320"}
          height={"300"}
          />
          <h1 className="text-lg font-bold mb-3 ml-5">Web Development</h1>
          <p className="mx-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestias! In quis sunt reiciendis necessitatibus cum. </p>
        </div>
        <div className="w-80 shadow-md shadow-gray-400 rounded-md">
          <Image className="mb-5"
          src={"/images/mobile.png"}
          alt="Image loading..."
          width={"320"}
          height={"300"}
          />
          <h1 className="text-lg font-bold mb-3 ml-5">App Development</h1>
          <p className="mx-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestias! In quis sunt reiciendis necessitatibus cum. </p>
        </div>
        <div className="w-80 shadow-md shadow-gray-400 rounded-md">
          <Image className="mb-5"
          src={"/images/uiux.png"}
          alt="Image loading..."
          width={"320"}
          height={"300"}
          />
          <h1 className="text-lg font-bold mb-3 ml-5">UIUX Development</h1>
          <p className="mx-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestias! In quis sunt reiciendis necessitatibus cum. </p>
        </div>
        </div>
      </div>
    </main>
  );
}
