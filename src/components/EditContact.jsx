import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchContactById, updateContactApi } from '../services/allApi';
import { toast } from 'react-toastify';

function EditContact() {

  const { id } = useParams()
  const [updateContact, setUpdateContact] = useState({
    name: "", email: "", phone: "", contactImage: ""
  });
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true);

  const nav = useNavigate()

  useEffect(() => {
    const getContact = async () => {
      try {
        const data = await fetchContactById(id)
        setUpdateContact(data)
        console.log(data)
      } catch (error) {
        setError('Failed to load contact details.');
      } finally {
        setLoading(false)
      }
    }

    getContact()
  }, [id])

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateContact((prev) => ({ ...prev, [name]:value }));
  }

  // Handle Update / submission
  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await updateContactApi(id, updateContact)
      toast.success("Contact Updated Succesfully !!")
      nav('/landing')
    } catch (error) {
      toast.warning("Failed To Update Contact Details !!")
    }
  }

  // const handleUpdate = async () => {
  //   const {name, email, phone, contactImage} = updateContact
  //   const result = await updateContactApi(id, updateContact);
  //   if(result.status == 201) {
  //     toast.success("Contact Updated Succefully !!")
  //     setUpdateContact({name: "", email: "", phone: "", contactImage: ""})
  //     nav('/landing')
  //   }
  //   else{
  //     toast.error("Failed to Update !!")
  //     console.log(result)
  //   }
  // }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className='flex flex-col items-center justify-center p-4'>
        <h1 className='text-3xl mt-10'>Edit Contact</h1>

        <div className="mx-auto max-w-sm bg-gray-600 mt-10 rounded-lg p-6 shadow-4 dark:bg-surface-dark">

          <label className="input input-bordered mb-3 flex items-center gap-2">
            <input onChange={handleChange} type="text" name='name' className="grow" value={updateContact.data?.name} />
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
            <input onChange={handleChange} type="email" name='email' className="grow" value={updateContact.data?.email} />
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
            <input onChange={handleChange} type="tel" name='phone' className="grow" value={updateContact.data?.phone} required />
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
            <input onChange={handleChange} type="text" name='contactImage' className="grow" value={updateContact.data?.contactImage} required />
          </label>

          <div className='flex justify-between'>
            <button onClick={handleUpdate} className="btn btn-neutral">Update</button>
            <Link to={'/landing'}>
              <button className="btn btn-error">Close</button>
            </Link>

          </div>

        </div>

      </div>
    </>
  )
}

export default EditContact