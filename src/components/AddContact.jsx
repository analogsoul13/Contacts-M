import React, { useState } from 'react'
import { addContactApi } from '../services/allApi'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddContact() {

    const [newContact, setNewContact] = useState({
        name: "", email: "", phone: "", contactImage: ""
    });

    const nav = useNavigate()

    


    const handleAdd = async () => {
        console.log(newContact);
        const { name, email, phone, contactImage } = newContact
        if (!newContact.name || !newContact.email || !newContact.phone || !newContact.contactImage) {
            toast.warning("Please Fill All the Fields !!")
        }
        else {
            const result = await addContactApi(newContact);
            if (result.status == 201) {
                toast.success("Contact Added Succesfully")
                setNewContact({ name: "", email: "", phone: "", contactImage: "" });
                nav('/landing')
            }
            else{
                toast.error("Failed to add !!!")
                console.log(result);
                
            }


        }

    };

    return (
        <>
            <div className='flex flex-col h-full items-center justify-center p-4'>
                <h1 className='text-3xl mt-10'>Add Contact</h1>

                <div className="mx-auto max-w-sm mt-10 rounded-lg p-6 shadow-4 dark:bg-surface-dark">

                    <label className="input input-bordered mb-3 flex items-center gap-2">
                        <input onChange={(e) => setNewContact({ ...newContact,name:e.target.value })} type="text" className="grow" placeholder="Name" />
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
                        <input onChange={(e) => setNewContact({ ...newContact, email:e.target.value })} type="email" className="grow" placeholder="Email" />
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
                        <input onChange={(e) => setNewContact({ ...newContact, phone:e.target.value })} type="tel" className="grow" placeholder="Phone" required />
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
                        <input onChange={(e) => {setNewContact({ ...newContact, contactImage:e.target.value })}} type="text" className="grow" placeholder="Image Url" required />
                    </label>

                    <div className='flex justify-between'>
                        <button onClick={handleAdd} className="btn btn-neutral">Save</button>
                        <Link to={'/'}><button className="btn btn-error">Cancel</button></Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AddContact