import React from 'react'

function About() {
  return (
    <div className='text-black py-12 px-6  md:py-24 xl:px-24 flex flex-col lg:flex-row gap-5'>
        <div className='w-full lg:w-1/2 '>
            <div className=''>
                <h1 className=' text-red-600 underline font-bold'>ABOUT US</h1>
                <h1 className=' text-5xl font-extrabold leading-[60px]'>We drive experiences for brands.</h1>
                <p className=' text-slate-600  py-5'>Lorem ipsum, dolor sit amet consectetur adipisicing as eos, ipsa ducimus voluptatibus dolores veniam laudantium reiciendis libero eum autem atque quos ratione iusto cupiditate, veritatis adipisci omnis magnam modi, laboriosam possimus harum voluptate?</p>
                <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
                    <img  width="68" height="68" src="https://www.finibus-wp.egenslab.com/wp-content/uploads/2022/05/mission-icon.png"  alt></img>
                    <div className='block w-full md:inline'>
                        <h1 className=' font-bold text-2xl  '>Our Mission</h1>
                        <p className=' text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic, </p>
                    </div>
                    <img decoding="async" width="142" height="80" src="https://www.finibus-wp.egenslab.com/wp-content/uploads/2022/05/ctoFounder.png" class="attachment-large size-large" alt />
                </div>
            </div>
            <div>
                <button className=' w-52 bg-red-800 rounded-3xl p-3 font-bold text-lg text-white my-6'>About More</button>
            </div>
        </div>
        <div className='w-full lg:w-1/2 '>
            <div className='sm:relative'>
                <img className='sm:absolute right-0  sm:w-1/2 rounded-lg' src="https://t4.ftcdn.net/jpg/04/67/97/95/360_F_467979573_PBejz9RgVw0Pw63g2KV89HeaGYhJPNjt.jpg" alt="img" />
                <img className=' rounded-md sm:pr-[10%] sm:pt-[10%] ' src="https://img.freepik.com/free-photo/medium-shot-men-women-work_23-2149300658.jpg" alt="img2" />
                {/* https://img.freepik.com/premium-photo/portrait-smiling-business-colleagues-discussing-laptop_107420-89710.jpg?w=1480 */}
            </div>
            {/* <div>
                <div>
                    <img src="" alt="img" />
                    <div>
                        <h1>
                            web development
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="" alt="img" />
                    <div>
                        <h1>
                            App Development
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default About