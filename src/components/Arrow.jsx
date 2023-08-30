import React from 'react'

function Arrow(props) {
    const {direction, action} = props
  return (
    <img src="public/images/vector-stroke.svg"  className={`${direction} cursor-pointer z-10 p-2 rounded-full bg-red-200`} alt="flechita" onClick={action} />
  )
}

export default Arrow