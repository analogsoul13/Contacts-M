import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Contacts from './Contacts'
import { getContactsApi } from '../services/allApi';
import { updateContactApi } from '../services/allApi';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing({ result }) {

  const [contacts, setContacts] = useState([])


  const nav = useNavigate()

  useEffect(() => {
    fetchContacts()
  }, [result])

  const fetchContacts = async () => {
    const result = await getContactsApi()
    console.log(result)
    if (result.status == 200) {
      setContacts(result.data);
    }

  }

  const [updateContact, setUpdateContact] = useState({
    name: "", email: "", phone: "", contactImage: ""
  });

  const handleUpdate = async () => {
    const { name, email, phone, contactImage } = updateContact
    const { id } = useParams()

    const result = await updateContactApi(contact.id);
    if (result.status == 201) {
      toast.success("Contact Updated Succesfully")
      setUpdateContact({ name: "", email: "", phone: "", contactImage: "" });
      nav('/landing')
    }
    else {
      toast.error("Failed to update !!!")
      console.log(result);

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


        {/* Modal */}

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_1" className="modal flex flex-col items-center justify-center p-4">
          <div className="modal-box">
            <h1 className='text-2xl '>Edit Contact</h1>

            <div className="mx-auto modal-box max-w-sm bg-gray-600 mt-2 rounded-lg p-4 shadow-4 dark:bg-surface-dark">

              <label className="input input-bordered mb-3 flex items-center gap-2">
                <input type="text" className="grow" placeholder={updateContact.name} />
              </label>

              <label className="input input-bordered mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" className="grow" placeholder="Email" />
              </label>

              <label className="input input-bordered mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="tel" className="grow" placeholder="Phone" required />
              </label>

              <label className="input input-bordered mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Image Url" required />
              </label>

              <div className='modal-action'>
                <form className='flex' method='dialog'>
                  <button onClick={handleUpdate} className="btn btn-neutral me-2">Update</button>
                  <button className="btn btn-error">Close</button>
                </form>
              </div>

            </div>
          </div>
        </dialog>




      </section>
    </>
  )
}

export default Landing