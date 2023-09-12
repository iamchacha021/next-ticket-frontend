import Link from "next/link";
import {FaLinkedinIn, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa'

export default function Footer() {
  return (

    <footer class="flex flex-wrap justify-between items-center py-3 my-4">
        <div class="w-full md:w-4/12 flex items-center">
            <Link href="/" class="mb-3 md:mb-0 text-gray-600 text-decoration-none flex items-center">
                
                <span>© 2023 Tikiti. All rights reserved</span>
            </Link>
        </div>

        <ul class="flex w-full md:w-4/12 justify-end list-none">
            <li class="ms-3 text-3xl"><Link href="https://twitter.com/" class="text-gray-600"><FaTwitter /> </Link></li>
            <li class="ms-3 text-3xl"><Link href="https://www.facebook.com/" class="text-gray-600"> <FaFacebook /> </Link></li>
            <li class="ms-3 text-3xl"><Link href="https://www.linkedin.com/in/emmanuel-chacha-a7414a248/" class="text-gray-600"><FaLinkedinIn /> </Link></li>            
            <li class="ms-3 text-3xl"><Link href="https://github.com/iamchacha021" class="text-gray-600"><FaGithub /> </Link></li>            
        </ul>
    </footer>

  )
}
