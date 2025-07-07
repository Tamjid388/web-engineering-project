import React, { useState } from "react";

export const DeliveryPolicy = ({product}) => {
  const [activeTab, setActiveTab] = useState("description");

  // Handle tab switching
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-10 mx-auto">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          onClick={() => handleTabClick("description")}
          className={`px-4 py-2 font-medium ${
            activeTab === "description" ? "border-b-2 border-black text-black" : "text-gray-500"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => handleTabClick("delivery")}
          className={`px-4 py-2 font-medium ${
            activeTab === "delivery" ? "border-b-2 border-black text-black" : "text-gray-500"
          }`}
        >
          Delivery Policy
        </button>
        <button
          onClick={() => handleTabClick("returns")}
          className={`px-4 py-2 font-medium ${
            activeTab === "returns" ? "border-b-2 border-black text-black" : "text-gray-500"
          }`}
        >
          Returns & Exchanges
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 text-sm">
        {activeTab === "description" && (
          <div className="text-start text-lg">
       <p>
  Discover the perfect balance of quality and value with our
   <span className="font-bold"> {product.name}</span>. Whether you're upgrading your daily essentials or searching for a thoughtful gift, this product delivers exceptional performance, style, and reliability.
</p>
<ul className="list-disc ml-5 mt-2 ">
  <li>Premium quality materials and craftsmanship</li>
  <li>Designed for convenience, functionality, and durability</li>
  <li>Suitable for personal use or as a gift</li>
  <li>Easy to use and maintain</li>
</ul>
<p className="mt-2">
  Ideal for a wide range of uses, the {product.name} is a must-have addition to your collection. Experience satisfaction with every use.
</p>
          </div>
        )}

        {activeTab === "delivery" && (
          <div className="text-start text-lg">
           {product.deliveryInfo?.freeShipping?
          <p>Free Shipping Available For this product</p> :
          <p>Shipping Charge Applicable</p>
          }
          </div>
        )}

        {activeTab === "returns" && (
          <div className="text-start text-lg">
       <strong>Return Policy:</strong> 
       {product.productDetails?.deliveryInfo?.returnPolicy}
          </div>
        )}
      </div>
    </div>
  );
};
