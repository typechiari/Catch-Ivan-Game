import React from 'react'

const Header = ({ count }) => {
  return (
    <div className='flex justify-center items-center p-8 '>
      <h1 className="font-mono text-3xl text-[#d7d7d7] font-bold bg-[#3C3C3C] rounded-lg p-2">
        Catch Ivan!
      </h1>
      <p className='ml-4 font-mono text-3xl text-[#d7d7d7] font-bold bg-[#3C3C3C] rounded-lg py-2 px-4'>
        {count}
      </p>
    </div>
  )
}

export default Header
