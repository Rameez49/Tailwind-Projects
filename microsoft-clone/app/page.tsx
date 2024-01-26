import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <div className="  p-4 cursor-pointer lg:hidden">
              <div className="line h-0.5 w-6 bg-black my-1"></div>
              <div className="line h-0.5 w-6 bg-black my-1"></div>
              <div className="line h-0.5 w-6 bg-black my-1"></div>
            </div>
            <div>
              <div className="search lg:p-4 lg:order-1">search</div>
            </div>
          </div>
          <div>
            <Image className=""
            src={"/images/logo.png"}
            alt="load..."
            width={"90"}
            height={"80"}/>
          
            
          </div>
          <div className="flex justify-center items-center">
            <div>
            <div className="cart mx-2">Cart</div>
            </div>
            <div>
              <div className="profile mr-1">Profile</div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}
