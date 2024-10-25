import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <nav>
                <div className="navbar bg-base-100">
                    <Link className="flex-1" to={'/'}>
                        <div className="flex-1">
                            <a className="btn btn-ghost bg-gray-700 text-2xl text-[#ff8040]">Contacts</a>
                        </div>
                    </Link>

                    <div className="flex-none gap-2">
                        <div className="sm:form-control hidden me-2">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        {/* mobile menu open */}
                        <div className="p-4 md:hidden justify-end">
                            <i onClick={() => setIsOpen(!isOpen)} className="fa-solid fa-bars fa-lg cursor-pointer" style={{ color: "#ffffff", }} />
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="flex flex-col z-10 sm:hidden items-center py-10 bg-[#ffcda8] w-full top-0 h-screen absolute text-xl text-slate-900">
                        {/* Mobile menu close */}
                        <div className='flex justify-end px-6 py-1 mb-6 hover:cursor-pointer w-full'>
                            <i onClick={toggle} className="fa-solid fa-xmark" />
                        </div>
                        <div className='flex justify-center py-2 mb-6 hover:bg-[#fe5711] w-full'>
                            <Link onClick={toggle} to={'/'}>
                                <h1>Home</h1>
                            </Link>
                        </div>
                        <div className='flex justify-center py-2 mb-6 hover:bg-[#fe5711] w-full'>
                            <Link onClick={toggle} to={'/addcontact'}>
                                <h1>Create Contact</h1>
                            </Link>
                        </div>
                        <div className='flex justify-center py-2 mb-6 hover:bg-[#fe5711] w-full'>
                            <Link onClick={toggle} to={'/landing'}>
                                <h1>View Contacts</h1>
                            </Link>

                        </div>

                    </div>
                )}


            </nav>
            <div className='fixed bottom-0 z-10 right-0 mb-6 mr-6'>
                <div className=' flex sm:hidden shadow-lg justify-center bg-slate-500 p-6 w-6 h-6 items-center rounded-full' aria-label="add">
                    <Link to={'/contacts'}>
                        <i className="fa-solid fa-plus" style={{ color: "#ffffff", }} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar