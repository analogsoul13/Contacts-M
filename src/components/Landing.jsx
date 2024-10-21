import React from 'react'
import { Link } from 'react-router-dom'
import Contacts from './Contacts'
import { getContactsApi } from '../services/allApi';
import { useState, useEffect } from 'react';

function Landing({ result }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts()
  },[result])

  const fetchContacts = async () => {
    const result = await getContactsApi()
    console.log(result)
    if (result.status == 200) { 
      setContacts(result.contacts);
    }

  }
  return (
    <>
      <section className='flex'>
        {/* sidenav */}
        <div className=' hidden sm:flex flex-col mx-2 p-2 h-full w-72 text-gray-100'>
          {/* <div className="p-3 flex justify-end">
            <i className="fa-solid fa-bars cursor-pointer" style={{color: "#000040",}} /> 
          </div> */}

          <div className='bg-[#ffaa71] text-black hover:bg-[#ffcda8] hover:cursor-pointer mt-4 mb-4 p-4 rounded-md'>
            <i className="fa-solid fa-user-plus me-2" style={{ color: "#000000", }} />
            <Link to={'/contacts'}>Create Contact</Link>
          </div>
          <div className='bg-[#ffaa71] text-black hover:bg-[#ffcda8] hover:cursor-pointer mb-4 p-4 rounded-md'>
            <i className="fa-solid fa-address-book me-2" style={{ color: "#000000", }} />
            <Link to={'/landing'}>Contacts</Link>
          </div>
        </div>

        {/* home content and all contacts */}
            <div className='m-3 text-xl w-full text-gray-100 font-semibold'>
              <h1 className='text-gray-100'>Contacts</h1>
                <Contacts />                
            </div>

      </section>
    </>
  )
}

export default Landing