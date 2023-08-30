import React from 'react'
import footer from '../../public/images/footer.png'
import logo from '../../public/images/logo.svg'
import social from '../../public/images/Social.svg'

export default function Footer() {
  return (
    <div className='h-48 flex flex-col'>
      <img className="w-full" src={footer} alt="" />
      <div className='flex flex-col lg:flex-row pt-2 gap-2 justify-center lg:justify-around items-center' >
        <div className='flex flex-col lg:flex-row items-center'>
        <p className='w-[64.86px] h-6 text-neutral-800 text-center font-semibold'>Home</p>
        <p className='w-[87.83px] h-6 text-neutral-800 text-center font-semibold'>Mangas</p>
        </div>
          <img src={logo} alt="" />
        <div className='flex flex-col gap-2'>
          <img src={social} alt="" />
          <button className=' h-12 text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-md mb-4'>Donate ♡</button>
        </div>
      </div>
    </div>
  )
}