import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-purple-400 p4 grid sm:grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-4 xl:grid-cols-4 xl:gap-4">
      <div className="bg-blue-200 p-4 m-4">1</div>
      <div className="bg-blue-200 p-4 m-4">2</div>
      <div className="bg-blue-200 p-4 m-4">3</div>
      <div className="bg-blue-200 p-4 m-4">4</div>
    </div>
    </>
  );
}
