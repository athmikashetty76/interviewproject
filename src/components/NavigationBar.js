import React from 'react'

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  
  const products = useSelector((state) => state.orebiReducer.products);
 
  return (
    <div className='flex relative left-12 top-3 justify-evenly'>
      <div>
       <p className=' text-4xl '>
        <span className='text-black'>HAND</span><span className='text-pink'>BAGS</span>
        <h3 className='text-sm text-gray'>The coolest choice on the sets</h3>
      </p>
      
      </div>
      
<div className="mb-3">
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center px-6 rounded-xl">
 
    <input
      type="search"
      className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l shadow bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon3" />

   
    <button
      className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-black text-white"
      type="button"
      id="button-addon3"
      data-te-ripple-init>
      Search
    </button>
  </div>
  

</div>
<Link to="/cart">
   <div className='bg-white shadow w-53 h-[60px] p-3'>
    <p>CART
   
   {products.length > 0 && (
            <p className=" bg-primeColor text-black text-xl w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
   </p>
   </div>

  </Link>
    </div>
  )
}

export default NavigationBar