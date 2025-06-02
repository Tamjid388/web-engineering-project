import React from 'react'

export const Sectiontitle = ({ title, subtitle }) => {
  return (
   <div className="text-center my-10 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{subtitle}</p>
    </div>
  )
}
