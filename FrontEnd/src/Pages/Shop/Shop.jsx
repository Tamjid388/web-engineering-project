import React, { useEffect, useState } from 'react'
import { Products } from './Products'
import axios from 'axios';
import { Filter } from '../../Components/Shop/Filter';

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
    <div className='border'>
      <div>
      <Filter products={products}/>
      </div>
        <Products products={products}/>
    </div>
  )
}
