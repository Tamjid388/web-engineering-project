import { ShoppingCart ,Heart} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export const Products = ({products}) => {
  return (
    <div className='pb-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4' >
          {  products?.map(product=>
          <div key={product.id} className="card bg-base-100   shadow-sm  group rounded-none">
  <figure className='h-[350px] relative border border-gray-100  overflow-hidden'>
    <img className='h-full w-full object-cover'
      src={product.image}
      alt="Shoes" />
 <div className='space-x-1 absolute bottom-[-40px] group-hover:bottom-2 transition-all duration-300'>
    <Link to={'/'} 
    >
  <button className='btn bg-black text-white border-none'><ShoppingCart/></button>
</Link>
   <Link to={'/'} >
  <button className='btn bg-black text-white border-none'><Heart/></button>
</Link>
 </div>

  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.category}</h2>
    <h2 className="card-title">{product.name}</h2>
    <p>{product.price}$</p>
    <div className="">
      <Link
      to={`/shop/product-details/${product.id}`}
      className="btn bg-black text-white">Buy Now</Link>
    </div>
  </div>
</div>)}

        </div>

    </div>
  )
}
