import React from 'react'
import Hero from './Hero'
import Carousel from './Carousel'

function Index() {
  return (
    <>
    <div className="min-h-[100vh] lg:min-h-[60vh] w-full bg-auto bg-no-repeat xl:bg-cover " style={{backgroundImage:"url('public/images/background.png')"
  }}>
    <Hero />
    </div>
    <Carousel />
      </>
  )
}

export default Index