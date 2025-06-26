import { nanoid } from 'nanoid';
import React from 'react'
import { FaBoxOpen } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asynccreateproduct } from '../../store/actions/productActions';

const Createproduct = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submiteHandler = (product) => {
        product.id = nanoid();
        dispatch(asynccreateproduct(product))
        navigate('/');
    }
  return (
      <div className="min-h-screen bg-[#1E0F0C] flex items-center justify-center px-4 py-6">
      <div className="bg-white shadow-emerald-500 shadow-xl rounded-2xl w-full max-w-2xl p-8">
  
        <div className="mb-2 text-center">
          <FaBoxOpen className="text-4xl text-red-500 mx-auto" />
          <h2 className="text-2xl font-extrabold text-gray-800 mt-2">Create New Product</h2>
          <p className="text-gray-500 text-sm mt-1">Fill in the details to add a new item</p>
        </div>

        <form onSubmit={handleSubmit(submiteHandler)} className="space-y-5">
          <div>
            <label className="text-gray-600 font-bold block mb-1">Image URL</label>
            <input
              {...register("image")}
              type="url"
              placeholder="Image link"
              className="w-full px-4 py-2 border rounded-md outline-none"
            />
          </div>

          <div>
            <label className="text-gray-600 font-bold block mb-1">Title</label>
            <input
              {...register("title")}
              type="text"
              placeholder="Product title"
              className="w-full px-4 py-2 border rounded-md outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 font-bold block mb-1">Price</label>
              <input
                {...register("price")}
                type="text"
                placeholder="0.00"
                className="w-full px-4 py-2 border rounded-md outline-none"
              />
            </div>

            <div>
              <label className="text-gray-600 font-bold block mb-1">Category</label>
              <input
                {...register("category")}
                type="text"
                placeholder="E.g. Electronics"
                className="w-full px-4 py-2 border rounded-md outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-600 font-bold block mb-1">Description</label>
            <textarea
              {...register("description")}
              placeholder="Enter product description..."
              className="w-full px-4 py-3 border rounded-md resize-none outline-none"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md text-lg font-semibold"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default Createproduct 