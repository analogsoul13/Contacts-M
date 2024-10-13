import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <nav
                className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <Link to={'/'}>
                        <div className='md:ml-2'>
                            <i className="fa-solid fa-lg fa-user-group" />
                            <span className="ms-2 text-xl text-black font-semibold dark:text-white">Your Circle</span>
                        </div>
                    </Link>


                    <div className="ms-5 md:flex w-[30%] hidden items-center justify-between">
                        <input
                            type="search"
                            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2" />


                        <span
                            className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-5"
                            id="basic-addon2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    {/* mobile menu open */}
                    <div className="p-4 md:hidden justify-end">
                        <i onClick={() => setIsOpen(!isOpen)} className="fa-solid fa-bars fa-lg cursor-pointer" style={{ color: "#000040", }} />
                    </div>
                </div>

                {isOpen && (
                    <div className="flex flex-col sm:hidden items-center py-10 bg-slate-100 w-full top-0 h-screen absolute text-xl text-slate-900">
                        {/* Mobile menu close */}
                        <div className='flex justify-end px-6 py-1 mb-6 hover:cursor-pointer w-full'>
                            <i onClick={toggle} className="fa-solid fa-xmark" />
                        </div>
                        <div className='flex justify-center py-2 mb-6 hover:bg-slate-400 w-full'>
                            <h1>Home</h1>
                        </div>
                        <div className='flex justify-center py-2 mb-6 hover:bg-slate-400 w-full'>
                            <h1>Create Contact</h1>
                        </div>
                        <div className='flex justify-center py-2 mb-6 hover:bg-slate-400 w-full'>
                            <Link to={'/landing'}>
                                <h1>View Contacts</h1>
                            </Link>
                            
                        </div>

                    </div>
                )}


            </nav>
            <div className='fixed bottom-0 right-0 mb-6 mr-6'>
                <div className=' flex sm:hidden shadow-lg justify-center bg-slate-500 p-6 w-6 h-6 items-center rounded-full' aria-label="add">
                    <i className="fa-solid fa-plus" style={{color: "#ffffff",}} />
                </div>
            </div>
        </>
    )
}

export default Navbar