import React from 'react'

const Products = () => {
  return (
    <div>
      <div className='bg-ghee mt-10 py-10 flex items-center justify-center'>
        {/* searchbar */}
        <input type='text' placeholder='Enter Product Name' className='pl-5 px-8 py-3 rounded-full text-blackish placeholder:text-gray w-[600px]'/>
      </div>
      <div>
        {/* products */}
      </div>
    </div>
  )
}

export default Products
