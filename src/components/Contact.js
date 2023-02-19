import React from 'react'
import "../components/contact.css"
function Contact() {

      const handleClick= ()=>{
        alert("form submitted")

      }

      

  return (
    <div id='main' className='h-screen' style={{backgroundImage:`url("./coffee.jpg")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"}}>

      <div className='form'>
        <div>
        <h1> contact us</h1>
        </div>
        
        <div className='inputs'>
          <input className='input1' id='place' type="text" placeholder='Name'/>
          <input className='input1'  id='place'  type="text" placeholder='Email'/>
          <input className='input1'  id='place' type="text" placeholder='Message'/>
          
        </div>

        <button onClick={handleClick} className='button1'>submit</button>
      </div>

    </div>
  )
}

export default Contact