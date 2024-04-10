import React from 'react'
import { IoSearch } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2  bg-gray-800 p-2 rounded-full'>
        <input 
        className='bg-gray-800 px-2 border-none outline-none'
        type="text"
        placeholder='Search' 
         />
        <button type="submit" className='bg-red-500 p-3 rounded-full  text-white'>
        <IoSearch />
        </button>
    </form>
  )
}

export default SearchInput