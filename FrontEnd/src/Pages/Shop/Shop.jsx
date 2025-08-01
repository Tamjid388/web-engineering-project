import React, { useEffect, useState } from 'react'
import { Products } from './Products'
import axios from 'axios';
import Select from 'react-select';
const options = [
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Footwear', label: 'Footwear' },
  { value: 'Accessories', label: 'Accessories' },
  { value: 'Gear & Equipment', label: 'Gear & Equipment' },
  { value: null, label: 'All Products' }
]
export const Shop = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null);


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
  const handleSelect = (selectedOption) => {
    setSelectedCategory(selectedOption ? selectedOption.value : null);

  }
 useEffect(() => {
    console.log("Updated category:", selectedCategory);
  }, [selectedCategory]);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
  console.log("filteredProducts", filteredProducts);
  return (
    <div className='mx-2 md:mx-0'>
  <div className="flex justify-between gap-8 my-6
  ">
    <h1 className='text-3xl font-bold'>Products</h1>
        <Select
        className='w-1/4'
        options={options}
        placeholder="Select Category"
        value={options.find(option => option.value === selectedCategory)}
        onChange={handleSelect}
      />
  </div>

      <Products products={filteredProducts} />
    </div>
  )
}
