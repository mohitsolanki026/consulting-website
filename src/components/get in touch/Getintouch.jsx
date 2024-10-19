import React from 'react'

function Getintouch() {
  return (
    <div className=' flex'>

      {/* <div className=' w-1/2  bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NWuRNxqTah3wk-GZ9Y2R4xN4UHlxSYjo4Q&usqp=CAU)] bg-black h-72 bg-cover bg-no-repeat bg-center bg-fixed'  >
      </div> */}
      <div className=' w-1/2  bg-[url(https://enterprisersproject.com/sites/default/files/2022-11/CIO_digital_transformation_cloud_technology.png)] bg-black h-72 bg-cover bg-no-repeat bg-center bg-fixed'  >

      </div>

      <div className=' bg-black w-1/2 p-5'>
        <div className='flex flex-col justify-between h-full '>
          <h3 className='md:text-3xl font-extrabold lg:leading-[60px] '>
            Subscribe to our Newsletter
          </h3>
          <div className='text-xs sm:text-sm md:text-base'>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
          <input type="text" placeholder='Enter your email' className='w-full p-2 my-2 rounded-lg text-black ' />
          <button className='w-full bg-red-600 text-white p-2 rounded-lg'>Subscribe</button>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Getintouch