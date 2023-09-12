import Image from "next/image";
import Link from "next/link";
import Logo from './lion.jpg'
import { FaHouseUser } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav>
        <Image 
          className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
          src={Logo}
          alt="Helpdesk Logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1>Tikiti Helpdesk</h1>
        <Link href='/' className="text-2xl "><FaHouseUser /></Link>
        <Link href='/tickets'>Tickets</Link>
        <Link href='/create-blog'>New Blog</Link>
    </nav>
  )
}
