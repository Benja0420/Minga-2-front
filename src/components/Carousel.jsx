import {useState, useEffect } from 'react'
import axios from 'axios'
import Arrow from './Arrow.jsx'




function Carousel() {


  let [counter, setCounter] = useState(0)
  let [categories, setCategories] = useState([])
  console.log(counter)

  function fetchData(){
    axios("https://minga-back-vyqy.onrender.com/categories")
    .then(res=>setCategories(res.data.categories))
    .catch(err=>console.log(err))
  }


  useEffect(() => {
  fetchData();
}, [])

  let next = () => (counter !== categories.length - 1) ? setCounter(counter + 1) : setCounter(0)
  let prev = () => (counter !== 0) ? setCounter(counter - 1) : setCounter(categories.length - 1)



  return (
    <div className='hidden lg:p-14 lg:flex lg:flex-col lg:w-full lg:h-2/5'>
        <div className='w-100 flex bg-gradient-to-t from-orange-500 to-orange-600  justify-between items-center p-8'>
            <Arrow action={prev} direction="rotate-180" />
          <div className='absolute flex gap-14'>
            <img src={categories[counter]?.character_photo} alt="Nami" className=' h-64' />
            <img src={categories[counter]?.cover_photo} alt="poster one piece" className='h-64' />
          </div>
            <div className='flex w-4/5 flex-row-reverse h-48 items-center -mr-24'>
              <div className='flex w-3/6 flex-col'>
                <h2 className='text-left text-lg font-bold inline-flex gap-10 text-white'>{categories[counter]?.name}</h2>
                <p className='text-left text-white leading-2'>{categories[counter]?.description}</p>
              </div>
            </div>
            <Arrow action={next} />
        </div>
      </div>
  )
}

export default Carousel












/* import React from 'react'
import Arrow from './Arrow' */




/* function Carousel() {
  return (
    <div className='hidden lg:p-14 lg:flex lg:flex-col lg:w-full lg:h-2/5'>
        <div className='w-100 flex bg-gradient-to-t from-orange-500 to-orange-600  justify-between items-center p-8'>
            <Arrow direction="rotate-180" />
          <div className='absolute flex gap-14'>
            <img src="public/images/nami.png" alt="Nami" className='relative' />
            <img src="public/images/wano.png" alt="poster one piece" className='h-64' />
          </div>
            <div className='flex w-4/5 flex-row-reverse h-48 items-center -mr-36'>
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
            <Arrow />
        </div>
      </div>
  )
}

export default Carousel */