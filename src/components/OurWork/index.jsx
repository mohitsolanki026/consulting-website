import React from 'react'
// import './OurWork.css'; // Import the CSS file

function OurWork() {
    return (
        <div className='text-transparent  '>
            <div>
                <h1 className='text-5xl font-extrabold outlinedText'>Our Latest Work</h1>
            </div>
            <div className=' justify-center'>
                <div className='flex flex-wrap justify-center'>
                    <div className='w-80 h-80 m-5 p-5 border bg-black border-gray-800 rounded-lg'>
                        <div>
                            <h1 className='text-3xl   text-white font-extrabold '>
                                Look Our Latest Work..
                            </h1>
                        </div>
                        <div>
                            <p className='  text-white'>We guide game-changing companies, across platforms & places, through agile design & digital experience. We make waves.</p>
                        </div>
                        <div>
                            <button className='border border-gray-500 text-white font-bold py-2 px-4 m-5 hover:bg-white hover:text-black'>
                                View More
                            </button>
                        </div>
                    </div>
                    {/* <div>
                        <img src='http://reves-react.b-cdn.net/images/bg/work4.png' alt='work' className='w-150 h-80 m-5 border border-gray-800 rounded-lg' />
                    </div> */}
                    <div>
                        <img src='http://reves-react.b-cdn.net/images/bg/work3.png' alt='work' className='w-[1000px] h-80 m-5 border border-gray-800 rounded-lg' />
                    </div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <div>
                        <img src='http://reves-react.b-cdn.net/images/bg/work2.png' alt='work' className='w-[500px] h-80 m-5 border border-gray-800 rounded-lg' />
                    </div>
                    <div>
                        <img src='http://reves-react.b-cdn.net/images/bg/work1.png' alt='work' className='w-96 h-80 m-5 border border-gray-800 rounded-lg' />
                    </div>
                    <div>
                        <img src='http://reves-react.b-cdn.net/images/bg/work5.png' alt='work' className='w-96 h-80 m-5 border border-gray-800 rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurWork