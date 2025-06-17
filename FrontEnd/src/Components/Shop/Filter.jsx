import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Filter = ({ products }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(products);

  const filteredByCategory = products.filter((product) => {
    return product.category == "Shoes";
  });
  console.log(filteredByCategory);

  return (
    <div>
      <Select options={options} placeholder="Select Category" />
    </div>
  );
};
