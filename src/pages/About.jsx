import React from "react";
import { Link } from "react-router-dom";

const mockTopProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 59.99,
  },
  {
    id: 2,
    title: "Elegant Leather Bag",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: 89.5,
  },
  {
    id: 3,
    title: "Casual Men's Shirt",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    price: 25.99,
  },
];

const About = () => {
  return (
    <div className="min-h-screen  px-6 py-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-red-300 mb-3">🛍️ E-Shopmart</h1>
        <p className="text-red-300 max-w-xl mx-auto text-lg">
          Welcome to E-Shopmart — your one-stop destination for modern and quality products.
          Discover our top trending items and enjoy seamless shopping.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-red-300 mb-6">🔥 Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mockTopProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#1E0F0C] shadow-emerald-500 shadow-xl p-4 rounded-xl"
            >
              <img
                src={product.image}
                alt=""
                className="h-48 w-full object-contain mb-4"
              />
              <h3 className="font-semibold text-red-300 text-lg truncate">{product.title}</h3>
              <p className="text-red-500 font-bold text-xl mt-2">${product.price}</p>
                <Link className='inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded' to={`/product-info/${product.id}`}>
                    View Details
                  </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center text-gray-500 text-sm">
        © 2025 E-Shopmart. All rights reserved.
      </div>
    </div>
  );
};

export default About;

