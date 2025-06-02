import React, { useEffect, useState } from 'react'
import { Products } from './Products'
import axios from 'axios';

export const Shop = () => {
     const [products,setProducts]=useState([])


   useEffect(() => {
    axios.get('/products.json')
      .then(res => {
       setProducts(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className=''>
        <Products products={products}/>
    </div>
  )
}
