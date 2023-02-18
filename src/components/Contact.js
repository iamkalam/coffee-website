import React from 'react'

function Contact() {
  return (
    <div className='h-screen' style={{backgroundImage: `url("./contact1.jpg")`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  
    }}>
      <div>
        <p className='text-xl font-mono text-center mt-10'>
          we are available 24/7 in your servies
        </p>

      </div>

      <div className='flex mt-10 '>
        <div className='m-auto flex flex-col gap-3 p-3'>
        <input className='border-2 w-52 p-2' type="text" placeholder='Name'/>
        <input className='border-2 w-52 p-2' type="text" placeholder='email'/>
        <input className='border-2 w-52 h-24' type="text" placeholder='message'/>
        <button className='border-2 bg-amber-300 hover:bg-amber-500 duration-500 text-xl'>Submit</button>
        </div>
      
      </div>
    </div>
  )
}

export default Contact