import React from 'react'

function Home() {
return (
    <div className='h-screen' style={{backgroundImage: `url("./back.jpg")`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    }}>

<h1 className='text-amber-700 font-bold text-5xl text-center  '>Kalamay Coffee shop</h1><i class="fa-sharp fa-regular fa-coffee-beans"></i>
<i class="fa-solid fa-coffee-bean"></i>
<p className='absolute top-40 right-3 p-5 font-mono text-md leading-8 '>
        Winter was just around the corner. town.
        I could see the cheerful  I walked across <br/> the vast parking lot.
        There were tables outside the shop<br/> each with a brown vintage style umbrella.
        This particular coffee shop is not a cafe<br/>, it’s a coffee shop literally.
        They sell the finest coffee from all over the world.
        </p>

        <div className=''>
            <button className=' text-white hover:bg-amber-600 duration-500 bg-yellow-600 p-3 rounded-lg absolute top-96 right-64 '>Get a Coffe</button>

        </div>
     


    </div>
)
}

export default Home