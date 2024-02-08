import React from 'react'

const Products = () => {
  return (
    <div>
      <div className='bg-ghee mt-10 py-7 px-5 flex items-center justify-center w-[70%] rounded-2xl ml-[50%] -translate-x-[50%]'>
        {/* searchbar */}
        <input type='text' placeholder='Enter Product Name' className='pl-5 px-8 py-5 rounded-full text-blackish placeholder:text-gray w-[600px]' />
      </div>
      <div>
        {/* products */}
      </div>
    </div>
  )
}

export default Products
