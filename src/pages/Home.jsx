import React from 'react'
import { Link } from 'react-router-dom';
import {
  Carousel,
  initTWE,
} from "tw-elements";


function Home() {
  return (
    <>
      <div className='flex flex-col justify-center my-4 items-center p-2'>
        <h1 className='text-3xl p-2 mb-2'>Save Your Connections</h1>
        <img className='hidden sm:flex' src="https://clipart-library.com/images_k/family-and-friends-silhouette/family-and-friends-silhouette-23.png " alt="" />
        <img className='sm:hidden' src="https://purepng.com/public/uploads/large/purepng.com-contacts-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596033aj6zs.png" alt="" />
        <div className='flex'>
          <Link to={'/addcontact'}>
            <button className='bg-slate-600 text-slate-100 p-4 rounded-xl m-4'>Add Contact</button>
          </Link>
          <Link to={'/landing'}>
            <button className='bg-green-600 text-slate-100 p-4 rounded-xl m-4'>View Contacts</button>
          </Link>
          
          
        </div>

      </div>
    </>
  )
}

export default Home