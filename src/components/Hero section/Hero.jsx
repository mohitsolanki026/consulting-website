import React, { useEffect, useState } from 'react';
import Img from '../Img';

function Hero() {
  const images = [
    {
      src: "https://media.istockphoto.com/id/609070448/photo/the-most-successful-ideas-are-formulated-as-a-team.jpg?s=612x612&w=0&k=20&c=Nmu9wA9hkQMbRGT8ca5m13lbgzmk7HHm9lv4zv3bGOM=",
      text: "BEST SOLUTIONS FOR YOUR BUSSINESS",
      text2: "Get the most reduction in your team's operating costs for the whole product which creates amazing UI/UX experiences.",
    },
    {
      src: "https://img.freepik.com/free-photo/close-up-smiley-woman-working-laptop_23-2149300651.jpg?w=2000",
      text: "BEST SOLUTIONS FOR YOUR MARKET",
      text2: "Our success in creating business solutions is due in large part to our talented and highly committed team.",
    },
    {
      src: "https://img.freepik.com/premium-photo/vertical-high-angle-view-multi-ethnic-it-development-team-collaborating-business-project-while-working-software-production-studio_236854-29548.jpg?w=2000",
      text: "BEST SOLUTIONS FOR YOUR FINANCES",
      text2: "Our success in creating business solutions is due in large part to our talented and highly committed team.",
    }
  ]

  const [imgsrc, setImgsrc] = useState(images[0].src)
  const [text1, setText1] = useState(images[0].text)
  const [text2, setText2] = useState(images[0].text2)

  let currentIndex = 0;

  // Function to update the image and text
  const updateImageAndText = () => {
    currentIndex = (currentIndex + 1) % images.length;
    setImgsrc(images[currentIndex].src);
    setText1(images[currentIndex].text);
    setText2(images[currentIndex].text2);
  };
  // Set an interval to update the image and text every 5 seconds
  useEffect(() => {
    const interval = setInterval(updateImageAndText, 5000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);



  return (
    <div className='  text-black bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-slate-100  via-black to-black md:h-screen'>
      <div className='text-white flex w-full  h-[70%] md:h-full justify-center items-center absolute    '>
        <div className='flex flex-col gap-5 justify-center md:text-left md:pl-48 w-2/3 p-4 z-40 '>
          <h1>WE CREATE BRANDS</h1>
          <h1 className=' font-bold text-2xl md:text-6xl md:leading-[70px] lg:leading-[100px] '>{text1}</h1>
          <h3 className=' text-xs md:text-sm'>{text2}</h3>
          <a href="#_" class=" w-40 text-center rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-white text-white ">
            <span class="absolute w-64 h-0 transition-all duration-700 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-white transition duration-700 group-hover:text-black ease">Contact</span>
          </a>
          {/* <button className='border-2 md:py-5 '>Contact</button> */}
        </div>

      </div>
      <div className='  md:px-24 flex items-center justify-between h-full'>
        <div className=' md:border-8 border-black   md:w-2/5 md:h-2/3 overflow-hidden    '>
          <Img value={imgsrc}  />
        </div>
        <div className='hidden md:inline-block overflow-hidden md:w-96 text-white font-extrabold md:text-7xl md:opacity-5 md:leading-[150px]'>
          <h1>WE ARE CREATIVE BRANDING AGENCY!</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
