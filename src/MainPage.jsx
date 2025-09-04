import React from 'react'
import Header from "./Header";
import { Link } from 'react-router-dom'

const MainPage = () => {

  return (

    <div className="flex w-full h-screen bg-purple-300">
   
      <div className="w-1/2 flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">SimpleStore</h1>
          <p className="text-lg text-gray-600 max-w-xl mb-6">
            Discover the latest trends in fashion, electronics, and more.  
            Shop your favorite products at the best prices with fast delivery.
          </p>
        
          <Link
            to="/products"
            className="text-white bg-purple-500 hover:bg-purple-400 focus:ring-4 focus:ring-purple-100 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Shop Now
          </Link>
              
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src="/first.png" alt="store" className="max-h-[400px]" />
      </div>
    </div>
  )
}

export default MainPage
