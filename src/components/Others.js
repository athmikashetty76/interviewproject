import React from 'react'
import { categories_images } from '../utils/images'
const Others = () => {
  return (
    <div className='flex gap-2 relative top-8 left-12'>
       {
        categories_images.map((others,id)=>(
            <div>
               <img className="h-30 w-84"src={others} alt="others">
               
               </img> 
            </div>
         ) )
       }
    </div>
  )
}

export default Others