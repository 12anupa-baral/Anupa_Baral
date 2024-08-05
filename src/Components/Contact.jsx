import React from 'react'

const Contact = () => {
  return (
    <div className='mt-10 text-white'>
         <h2 className='underline text-3xl font-bold  '>Contact</h2>
         <p>Submit the form below to get in touch with me</p>
         <form className='flex flex-col justify-center  gap-4 items-center  '>
            <input className='bg-transparent border-2 border-gray-500 w-[50%]' type="text" placeholder='Enter your name' />
            <input className='bg-transparent border-2 border-gray-500 w-[50%]' type="text" placeholder='Enter your email' />
            <input className='bg-transparent border-2 border-gray-500 w-[50%]' type="textarea" placeholder='Enter the message' />
         </form>
    </div>
  )
}

export default Contact