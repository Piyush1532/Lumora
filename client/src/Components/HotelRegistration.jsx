import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelRegistration = () => {
  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded-xl w-full max-w-4xl max-md:mx-2 overflow-hidden'>

        {/* Image */}
        <img 
          src={assets.regImage} 
          alt="Hotel registration"  
          className='w-1/2 object-cover hidden md:block'
        />

        {/* Form */}
        <div className='relative flex flex-col items-center md:w-1/2 w-full p-8 md:p-10'>

          {/* Close Icon */}
          <img 
            src={assets.closeIcon} 
            alt="Close icon" 
            className='absolute top-4 right-4 h-4 w-4 cursor-pointer' 
          />

          <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>

          {/* Hotel Name */}
          <div className='w-full mt-4'>
            <label htmlFor="name" className='font-medium text-gray-500'>
              Hotel Name
            </label>
            <input 
              id='name' 
              type="text" 
              placeholder='Type Here' 
              className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' 
              required 
            />
          </div>

          {/* Phone */}
          <div className='w-full mt-4'>
            <label htmlFor="contact" className='font-medium text-gray-500'>
              Phone
            </label>
            <input 
              id='contact' 
              type="tel" 
              placeholder='Type Here' 
              className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' 
              required 
            />
          </div>

          {/* Address */}
          <div className='w-full mt-4'>
            <label htmlFor="address" className='font-medium text-gray-500'>
              Address
            </label>
            <input 
              id='address' 
              type="text" 
              placeholder='Type Here' 
              className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' 
              required 
            />
          </div>

          {/* City Dropdown */}
          <div className='w-full mt-4'>
            <label htmlFor="city" className='font-medium text-gray-500'>
              City
            </label>
            <select 
              id="city" 
              className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' 
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option value={city} key={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button 
            type='submit' 
            className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2 rounded cursor-pointer mt-6 self-start'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default HotelRegistration
