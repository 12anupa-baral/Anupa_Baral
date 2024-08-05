import React from 'react'

const Contact = () => {
  return (
    <div className='mt-10 text-white pb-10'>
         <h2 className='underline text-3xl font-bold  '>Contact</h2>
         <p>Submit the form below to get in touch with me</p>
         <form className='flex flex-col justify-center  gap-4 items-center mt-10  '>
            <input className='bg-transparent border border-white w-full sm:w-[50%] rounded-md h-11 p-3' type="text" placeholder='Enter your name' />
            <input className='bg-transparent border border-white w-full sm:w-[50%] rounded-md h-11 p-3' type="text" placeholder='Enter your email' />
            <textarea
            className='bg-transparent border border-white w-full sm:w-[50%] rounded-md p-3 h-40'
            placeholder='Enter your message'
          ></textarea>
          <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3 rounded-md w-fit'>Send Message</button>
         </form>

    </div>
  )
}

export default Contact