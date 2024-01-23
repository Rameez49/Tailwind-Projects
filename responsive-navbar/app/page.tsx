import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
    <header className="flex flex-row">
      
      <Link href={"/"}>Tailwind Anytime</Link>


      
        <ul>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>Tailwind CSS Tips</Link></li>
          <li><Link href={"/"}>Videos</Link></li>
          <li><Link href={"/"}>Blog</Link></li>
          <li><Link href={"/"}>Courses</Link></li>
        </ul>
      
    </header>
    </>
  );
}
