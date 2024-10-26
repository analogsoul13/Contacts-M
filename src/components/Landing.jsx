import React from 'react'
import { Link } from 'react-router-dom'
import Contacts from './Contacts'
import { getContactsApi } from '../services/allApi';
import { useState, useEffect } from 'react';

function Landing({ result }) {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchContacts()
  }, [result])

  const fetchContacts = async () => {
    const result = await getContactsApi()
    //console.log(result)
    if (result.status == 200) {
      setContacts(result.data);
    }

  }

  return (
    <>
      <section className='flex'>
        {/* sidenav */}
        <div className=' hidden sm:flex flex-col mx-2 p-2 h-full w-1/6 text-gray-100'>
          {/* <div className="p-3 flex justify-end">
            <i className="fa-solid fa-bars cursor-pointer" style={{color: "#000040",}} /> 
          </div>  */}
          <Link to={'/contacts'}>
            <div className='bg-[#ffaa71] text-black hover:bg-[#ffcda8] hover:cursor-pointer mt-4 mb-4 p-4 rounded-md'>
              <i className="fa-solid fa-user-plus me-2" style={{ color: "#000000", }} />
              Create Contact
            </div>
          </Link>
          <Link to={'/landing'}>
            <div className='bg-[#ffaa71] text-black hover:bg-[#ffcda8] hover:cursor-pointer mb-4 p-4 rounded-md'>
              <i className="fa-solid fa-address-book me-2" style={{ color: "#000000", }} />
              Contacts
            </div>
          </Link>
        </div>

        {/* home content and all contacts */}
        <div className='flex flex-col justify-center items-center sm:items-start flex-wrap sm:w-full'>
          <h1 className='p-4 ml-2 text-gray-100 text-xl'>Total {contacts.length} Contacts</h1>
          <div className='flex justify-center'>
            {
              contacts.length > 0 ?
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-6 m-3 text-xl w-full text-gray-100 font-semibold'>

                  {contacts.map(item => (
                    <Contacts contact={item} />
                  ))}
                </div>
                :
                <h1>No Contacts</h1>
            }
          </div>
        </div>

      </section>
    </>
  )
}

export default Landing