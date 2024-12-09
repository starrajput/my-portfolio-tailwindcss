import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
         About Me
       </h1>
      <p className="mb-8 leading-relaxed">
      We are passionate about creating innovative and user-friendly websites that meet the needs of our clients
          . With expertise in HTML, CSS, JavaScript, and Next.js, we strive to deliver high-quality web solutions 
          tailored to your specific requirements.
          Our mission is to provide exceptional service and ensure your  online presence 
          stands out. Whether you need a personal blog, a corporate website, or an e-commerce platform,
          we have the skills and experience to bring your vision to life.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../public/bilal.jpg")}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default About