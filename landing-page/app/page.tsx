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
      </div>
    </main>
  );
}
