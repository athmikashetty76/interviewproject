import React from 'react'

const Categories = () => {
  const list=["Baby Bags","Backpacks","Beach Packs","Cluches","Cosmetic Pouches"]
  return (
    
      <div className='lists relative shadow h-100 w-85 top-5 left-20 p-2'>
            <ul className='list-none flex mr-4'>
            {
            list.map((v,i)=><li className='m-4 after:border-r-2 border-gray' key={i}>{v}</li>)
         }

            </ul>
        

        </div>
   
  )
}

export default Categories