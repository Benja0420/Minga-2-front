import { useState } from 'react'
import logo from '../../public/images/logo.svg'



function navbar() {
  const [show, setShow] = useState(false)
  return (
    <>
    <div className="justify-between flex absolute top-0 w-full">
        <img onClick={()=>setShow(true)} src="public/images/menu.png" alt="menu" />
        <img src={logo} alt="logo minga"/>
    </div>
    {show && <div className="flex flex-col z-20 min-h-screen w-full absolute lg:w-1/3 bg-gradient-to-t from-orange-500 to-orange-600 ">
      <div className='flex p-1 lg:p-6 items-center text-white text-sm gap-1 lg:gap-2'>
      <img src="./public/images/Rectangle 10.png" alt="" />
      <p className='flex-grow font-semibold'>benjaminsepulveda.0420@gmail.com</p>
      <img onClick={()=>setShow(false)} src="./public/images/filled.svg" alt="" />
      </div>
      <ul className='flex flex-col items-center gap-3'>
        <li className='text-orange-600 p-4 bg-white rounded-2xl w-10/12 text-center font-bold'>Home</li>
        <li className='w-10/12 text-center text-white font-semibold'>Register</li>
        <li className='w-10/12 text-center text-white font-semibold'>Sing In</li>
      </ul>
    </div>}
    </>
  )
}

export default navbar