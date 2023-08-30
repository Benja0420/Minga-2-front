import { useState, useEffect } from 'react'
import './App.css'
import Layout from './Layouts/Layout'
import Index from './components/Index'

useEffect
function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Index />
    </Layout>
  )
}


export default App





{/* <div className="flex flex-col h-screen w-full">
    <div className="h-3/5 w-full bg-cover bg-no-repeat " style={{backgroundImage:"url('public/images/background.png')"}}>
        <div className="justify-between flex mx-4">
          <img src="public/images/menu.png" alt="menu" />
          <img src={logo} alt="logo minga"/>
        </div>
        <div className='flex flex-col  justify-center ml-12 mt-12'>
          <h1 className='text-white text-7xl font-bold'>For the love of manga</h1>
          <h3 className='text-white text-3xl font-normal'>Explore our varieties</h3>
          <p className='text-white text-lg font-semibold'>#MingaLove❤</p>
          <div className="w-60 p-4 bg-white rounded-md justify-center items-center gap-2.5 inline-flex">
            <button className="text-orange-600 text-2xl font-medium">Sign In!</button>
          </div>
        </div>
    </div>
    <div className='p-14 flex flex-col w-full h-2/5'>
        <div className='w-100 flex bg-gradient-to-t from-orange-500 to-orange-600  justify-between items-center p-8'>
          <img src="public/images/vector-stroke.svg" className='-rotate-180 p-2 rounded-full bg-red-200' alt="flechita" />
          <div className='absolute flex gap-14'>
            <img src="public/images/nami.png" alt="Nami Imagen" className='relative' />
            <img src="public/images/wano.png" alt="One Piece imagen" className='h-64' />
          </div>
            <div className='flex w-4/5 flex-row-reverse h-48 items-center '>
              <div className='flex w-3/6 flex-col'>
                <h2 className='text-left text-lg font-bold inline-flex gap-10 text-white'>
                  Shonen
                </h2>
                <p className='text-left text-white leading-2'>
                Is the manga that is aimed at adolescent boys.
                They are series with large amounts of action, in which humorous situations often occur.
                The camaraderie between members of a collective or a combat team stands out.
                </p>
              </div>
            </div>
          <img src="public/images/vector-stroke.svg" className='p-2 rounded-full bg-red-200'  alt="flechita" />
        </div>
      </div>
    </div> */}