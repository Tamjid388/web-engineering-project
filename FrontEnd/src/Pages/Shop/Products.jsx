import React from 'react'
import { Link } from 'react-router'

export const Products = ({products}) => {
  return (
    <div className='py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4  gap-4' >
          {  products?.map(product=>
          <div key={product.id} className="card bg-base-100   shadow-sm  group rounded-none">
  <figure className='h-[350px] relative border border-gray-100  overflow-hidden'>
    <img className='h-full w-full object-cover'
      src={product.image}
      alt="Shoes" />
   <Link to={'/'} className='absolute bottom-[-40px] group-hover:bottom-2 transition-all duration-300'>
  <button className='btn'>Add To Cart</button>
</Link>

  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.category}</h2>
    <h2 className="card-title">{product.name}</h2>
    <p>{product.price}$</p>
    <div className="">
      <button className="btn ">Buy Now</button>
    </div>
  </div>
</div>)}

        </div>

    </div>
  )
}
