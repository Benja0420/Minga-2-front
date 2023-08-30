import React from 'react'

function Hero() {
  return (
      <div className='gap-2 flex flex-col  justify-center items-center h-screen lg:h-auto lg:items-start lg:ml-24 lg:pt-32'>
      <h1 className='text-white text-3xl font-bold'>For the love of manga</h1>
    <h3 className='text-white text-xl font-normal'>Explore our varieties</h3>
    <p className='hidden lg:block text-white text-md font-semibold'>#MingaLove❤</p>
    <div className="w-36 p-2 bg-white rounded-md justify-center items-center gap-2.5 inline-flex">
      <button className="text-orange-600 text-xl font-medium">Sign In!</button>
    </div>
  </div>
  )
}

export default Hero