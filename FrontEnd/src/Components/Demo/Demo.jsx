import React from 'react'

export const Demo = () => {
   const filterOptions = {
  categories: [
    "Apparel",
    "Shoes",
    "Equipment",
    "Accessories",
    "Nutrition",
    "Recovery",
    "Electronics",
    "Home Gym",
    "Fitness Tech"
  ]
};
console.log(filterOptions);
// const filter=filterOptions.filter(filterOptions.categories)
const map=filterOptions.categories.map(i=>console.log(i))

  return (
    <div>
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600">Demo</h1>
        <p className="mt-2 text-gray-600">This is a demo route for testing.</p>
      </div>

<div>

</div>
    </div>
    </div>
  )
}
