import React from 'react'
import "../components/Services.css"

function Services() {
  return (

    <div >

      <div className='text-center mt-10'>
        <h1 className='text-3xl capitalize font-serif'> coffee services</h1>
      </div>

      <div className='flex gap-16 items-center justify-around mt-10' >
              
      <div className='main'>
      <div className='card'>
        <div className='fontcard'>
        <img src='./coffeetype.jpg'/>
        </div>

        <div id='backcard' className='text-center '>
              <h1 className='text-3xl uppercase border-2 mt-16 font-bold'>Espresso</h1>

              <h1 className='text-2xl p-2 font-mono'>large : 3 $</h1>

              <h1 className='text-2xl  p-2 font-mono'>Medium : 6 $</h1>
        
              <h1 className='text-2xl  p-2  font-mono'>Small : 10 $</h1>

      </div>

    </div>
      

    </div>

    <div className='main'>
      <div className='card'>
        <div className='fontcard'>
        <img src='./coffeetype.jpg'/>
        </div>

        <div id='backcard' className='text-center '>
              <h1 className='text-3xl uppercase border-2 mt-16 font-bold'>Latte/Iced Latte</h1>

              <h1 className='text-2xl p-2 font-mono'>large : 3 $</h1>

              <h1 className='text-2xl  p-2 font-mono'>Medium : 6 $</h1>
        
              <h1 className='text-2xl  p-2  font-mono'>Small : 10 $</h1>

      </div>

    </div>
      

    </div>


    <div className='main'>
      <div className='card'>
        <div className='fontcard'>
        <img src='./coffeetype.jpg'/>
        </div>

        <div id='backcard' className='text-center '>
              <h1 className='text-3xl uppercase border-2 mt-16 font-bold'>Black Coffee</h1>

              <h1 className='text-2xl p-2 font-mono'>large : 3 $</h1>

              <h1 className='text-2xl  p-2 font-mono'>Medium : 6 $</h1>
        
              <h1 className='text-2xl  p-2  font-mono'>Small : 10 $</h1>

      </div>

    </div>
      

    </div>

    <div className='main'>
      <div className='card'>
        <div className='fontcard'>
        <img src='./coffeetype.jpg'/>
        </div>

        <div id='backcard' className='text-center '>
              <h1 className='text-3xl uppercase border-2 mt-16 font-bold'>Mocha</h1>

              <h1 className='text-2xl p-2 font-mono'>large :3 $</h1>

              <h1 className='text-2xl  p-2 font-mono'>Medium :6 $</h1>
        
              <h1 className='text-2xl  p-2  font-mono'>Small : 10 $</h1>

      </div>

    </div>
      

    </div>

      </div>



    </div>
  )
}

export default Services