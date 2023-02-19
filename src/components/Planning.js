import React from 'react'
import "../components/planning.css"
import Data from './planningData'

function Planning() {
  return (
    <div className="container">
    {Data.map((item) =>{
      return (
        <div className='card2'>
        <div className='image'>
          <img src={item.src}/>
        </div>
        
        <div className='text'>
          <h1>{item.branch}</h1>

          <h2>{item.line}</h2>
          
          <i class="fa-solid fa-location-dot"></i><h2><i>{item.address}</i></h2>
          <button>Explore <i class="fa-solid fa-arrow-right"></i> </button> 
        </div>

      </div>

      )
    })}


    </div>

  )
}

export default Planning