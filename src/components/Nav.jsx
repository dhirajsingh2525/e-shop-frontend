import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
// nav Bar ..............

  const {user} = useSelector((state) => state.userReducer)
  const cartCount = user?.cart?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <div className='nav relative w-full  px-5 flex flex-wrap items-center justify-between font-semibold text-lg py-2 shadow bg-[#1E0F0C] text-white'>
      <img className="h-14" src="/8864212.png" alt="" />

       <div className='nav1 flex gap-x-10'>
         <NavLink className={(e) => e.isActive ? 'text-red-200 rounded-md' : ''} to='/'>
           Home 
        </NavLink>
        {user ?  (
        <>
            <NavLink className={(e) => e.isActive ? 'text-red-200 rounded-md' : ''} to='/settings'>
           Account setting
        </NavLink>
         {user?.isAdmin && (
           <NavLink className={(e) => e.isActive ? 'text-red-200 rounded-md' : ''} to='/createproduct'>
           create products
        </NavLink> 
        )}
         <NavLink className={(e) => e.isActive ? 'text-red-200 rounded-md' : ''} to='/carts'>
           carts
        </NavLink>
        </>

  ) : (
     <NavLink className={(e) => e.isActive ? 'text-red-200 rounded-md' : ''} to='/signin'>
           signin
        </NavLink>
  )
        }
        
          <NavLink className={(e) => e.isActive ? 'text-red-200' : ''} to='/about'>
            About
        </NavLink>
       </div>
       <div>
               <div className="cart-icon relative inline-block px-2 py-2 rounded-full bg-red-300">
  <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart" className="h-10 w-10" />
  {cartCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
      {cartCount}
    </span>
  )}
</div>
       </div>
    </div>
  )
}

export default Nav 