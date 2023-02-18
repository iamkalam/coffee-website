import React from 'react'

function About() {
  return (
    <div>
      <div className='flex justify-around items-center mr-12'>
      <img  src='./about.jpg'/>
      <div clas>
        <h1 className='text-amber-700 font-bold text-6xl '>Kalamay Coffee</h1>
        <h2 className='text-2xl capitalize  text-amber-600 font-semibold mt-2'>the taste changer in your life</h2>
        <h2 className='font-mono'> May your coffee be strong and your Monday be short</h2>

        <button className='border-2 mt-6 bg-amber-500 p-2 rounded-lg text-white hover:bg-amber-700 duration-700'>buy a Coffee </button>
        <button className='border-2 mt-3 bg-amber-500 p-2 rounded-lg text-white hover:bg-amber-700 duration-700 ml-10'>donate </button>
      </div>
      </div>
      
      
    </div>
    
  )
}

export default About