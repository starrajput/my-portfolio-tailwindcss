 import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {AiOutlineCloudDownload } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'> 
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../public/logo.png")} alt="AR" width={100} height={100}
       className='w-21 h-21'
      />
         <span className="ml-3 text-xl">My Portfolio</span>
    </a>
    <nav className=" font-semibold md:ml-auto md:mr-auto flex flex-wrap items-center  text-base justify-center">
      <Link href={""} className="mr-5 hover:text-gray-900">Home</Link>
      <Link  href={"#about"}  className="mr-5 hover:text-gray-900">About</Link>
      <Link  href={"#skills"} className="mr-5 hover:text-gray-900">Skills</Link>

      <Link  href={"#Contact"} className="mr-5 hover:text-gray-900"> Contact</Link>
    </nav>
   <a href="/cv/bilal cv pdf.pdf">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      DownloadCV
      <AiOutlineCloudDownload  className='text-xl ml-2'/>
    </button>
    </a>
   
  </div>
</header>
    </div>
  )
}

export default Navbar