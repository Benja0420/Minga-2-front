import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'


function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen w-full">
    <Navbar />
      {props.children}
    <Footer />
    </div>
  )
}

export default Layout