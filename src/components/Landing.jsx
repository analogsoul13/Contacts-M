import React from 'react'
import { Link } from 'react-router-dom'
import Contacts from './Contacts'

function Landing() {
  return (
    <>
      <section className='flex'>
        {/* sidenav */}
        <div className='bg-white hidden sm:flex flex-col mx-2 p-2 h-screen w-72 text-gray-100'>
          <div className="p-3 flex justify-end">
            <i className="fa-solid fa-bars cursor-pointer" style={{color: "#000040",}} /> 
          </div>

            <div className='bg-gray-700 hover:bg-gray-500 hover:cursor-pointer mb-4 p-4 rounded-md'>
              <i className="fa-solid fa-user-plus me-2" style={{ color: "#ffffff", }} />
              <Link to={'/addcontact'}>Create Contact</Link>
            </div>
            <div className='bg-gray-700 hover:bg-gray-500 hover:cursor-pointer mb-4 p-4 rounded-md'>
              <i className="fa-solid fa-address-book me-2" style={{ color: "#ffffff", }} />
              <Link to={'/contacts'}>Contacts</Link>
            </div>
          </div>

        {/* home content */}
        <div className='m-3 text-xl w-full text-gray-900 font-semibold'>
          <h1 className='text-gray-800'>Contacts</h1>
          <Contacts />
        </div>
      </section>
    </>
  )
}

export default Landing