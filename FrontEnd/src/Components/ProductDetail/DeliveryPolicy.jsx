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
          <div className="text-start">
         <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        )}

        {activeTab === "delivery" && (
          <div className="text-start">
            Cdi
          </div>
        )}

        {activeTab === "returns" && (
          <div className="text-start">
          return  Cdi
          </div>
        )}
      </div>
    </div>
  );
};
