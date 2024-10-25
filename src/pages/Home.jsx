import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='flex flex-col justify-center my-4 items-center p-2'>
        <h1 className='text-3xl p-2 mb-4'>Save Your Connections</h1>
        
        <div className='flex'>
          <img className='hidden sm:flex' src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-page-in-mobile-1886632-1598496.png" alt="" />

        </div>
        {/* Mobile Screen */}
        <div className='bg-contain sm:hidden h-full mt-6 px-4'>
          <img src="https://www.whitepages.com/static/images/png/call-illustration.webp" alt="" />
        </div>

        <div className='flex mt-6'>
          <Link to={'/contacts'}>
            <button className='btn bg-slate-600 shadow-lg text-slate-100 p-4 rounded-xl m-4'>Add Contact</button>
          </Link>
          <Link to={'/landing'}>
            <button className='btn bg-[#ff8040] shadow-lg text-white p-4 rounded-xl m-4'>View Contacts</button>
          </Link>


        </div>

      </div>
    </>
  )
}

export default Home