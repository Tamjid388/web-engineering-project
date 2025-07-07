import React, { useState } from 'react'

export const Reviews = ({product}) => {
    const [open,setOpen]=useState(false)
    const reviews = product.productDetails?.reviews;
    console.log(reviews);
  return (
    <div>
        <h1 className='text-2xl text-start font-bold'>Reviews</h1>
         <div className='flex flex-col gap-2
           md:flex-row md:justify-between md:items-center'>
            <p className='text-start'>Get specific details about this product from customers who own it.</p>
            <button
            onClick={()=>setOpen(!open)}
            className='btn btn-outline btn-primary'>Write A Review</button>
         </div>
         <div className='w-full my-4'>
{
    open && <div className='flex flex-col justify-start'>
     <textarea 
           className="textarea w-full" placeholder="Write Your throughts">

           </textarea>
           <button className='btn btn-primary text-start w-fit my-3' type="button">Submit</button>
    </div>
           
}

         </div>

        <div>
          
        </div>
    </div>
  )
}
