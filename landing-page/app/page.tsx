import Image from "next/image";
import Card from "./component/card";
import Footer from "./component/Footer";

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

          <div className="  absolute inset-x-72 inset-y-12 text-white font-semibold ">
            <p className=" lg:text-5xl ">
              Hi,<span className="text-2xl"> I am Rameez Ul Hassan</span>
            </p>

            <p className="text-5xl mt-5">Full Stack Developer</p>
          </div>
        </div>
        <div className="bg-black text-white text-center p-12 lg:text-5xl font-semibold sm:text-4xl md:text-3xl">
          Work, I Can Do For You
        </div>
        <div className=" flex justify-around flex-wrap lg:m-12 lg:mx-28">
          <Card
            image={"/images/web.png"}
            title={"Web Development"}
            Description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestias! In quis sunt reiciendis necessitatibus cum."
            }
          />
          <Card
            image={"/images/mobile.png"}
            title={"App Development"}
            Description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestias! In quis sunt reiciendis necessitatibus cum."
            }
          />
          <Card
            image={"/images/uiux.png"}
            title={"UIUX Development"}
            Description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestias! In quis sunt reiciendis necessitatibus cum."
            }
          />
        </div>
        <div className="flex text-white ">
          <div className="bg-yellow-700 p-10">
        <Footer
          
          
          title={"Contact Me"}
          paraDetails={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor, esse quasi doloremque temporibus quis."
          }
          mail={"abc@gmail.com"}
        />
        </div>
        <div className="bg-red-900 p-10">
        <Footer
          
          
          title={"About Me"}
          paraDetails={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor, esse quasi doloremque temporibus quis."
          }
          
          
        />
        </div>
        </div>
        <div  className="bg-black text-white text-lg text-center p-4">
          <p>PROJECT BY RAMEEZ UL HASSAN</p>
        </div>
      </div>
    </main>
  );
}
