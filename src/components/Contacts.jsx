import { Link } from 'react-router-dom'
import { deleteContactApi } from '../services/allApi'
import { toast } from 'react-toastify'

function Contacts({contact}) {
    const handleDelete = async()=>{
        const result = await deleteContactApi(contact.id)
        if(result.status==200){
            toast.success("Contact Deleted !")
            
        }
    }

    return (
        <>

                {/* Table */}
                {/* <div className="overflow-auto rounded-lg shadow hidden bg-gray-700">
                    <table className="min-w-full text-left text-sm font-light text-surface ">
                        <thead className="border-b border-neutral-200  font-medium dark:border-white/10 dark:bg-body-dark">
                            <tr>
                                <th scope="col" className="md:px-6 px-2 py-4">#</th>
                                <th scope="col" className="md:px-6 px-2 py-4">Image</th>
                                <th scope="col" className="md:px-6 px-2 py-4">Name</th>
                                <th scope="col" className="md:px-6 px-2 py-4">Email</th>
                                <th scope="col" className="md:px-6 px-2 py-4">Phone</th>
                                <th scope="col" className="md:px-6 px-2 py-4">Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr
                                className="border-b border-neutral-200 bg-black/[0.02]">
                                <td className="whitespace-nowrap md:px-6 px-2 py-4 font-medium">{contact.id}</td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4 font-medium"><img src={contact.contactImage} className='w-12 h-12 rounded-full' alt="" /></td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4">{contact?.name}</td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4 text-blue-500 hover:underline hover:cursor-pointer">{contact.email}</td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4">{contact.phone}</td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4">

                                    <button className='text-blue-500 hover:underline me-4'>View</button>
                                    <button onClick={handleDelete} className='text-red-500 hover:underline'>Delete</button>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div> */}
                {/* Mobile screens */}
                <div className="">
                    <div className='bg-[#000000] p-2 rounded-lg shadow-xl'>
                        <div className='flex'>
                            <div className='flex w-1/2 items-center h-full p-4 m-2 font-light text-sm'>
                                <img className='rounded-full' src={contact.contactImage} alt="" />
                            </div>
                            <div className='flex flex-col gap-2 justify-center p-2 items-start font-light text-sm'>
                                <div className='font-bold'>Name</div>
                                <h1>{contact?.name}</h1>
                                <div className='font-bold'>Email</div>
                                <h1>{contact.email}</h1>
                                <div className='font-bold'>Phone</div>
                                <h1>+91{contact.phone}</h1>
                            </div>
                        </div>
                        <div className='flex mt-2 bg-gray-600 px-6 rounded-lg p-2 justify-between'>
                            <button className='bg-[#ff8040] text-sm py-2 shadow px-6 font-light rounded-lg text-white'>
                                Edit
                            </button>
                            <button onClick={handleDelete} className='bg-red-600 text-sm py-2 shadow px-6 font-light rounded-lg text-white' >Delete</button>
                        </div>
                    </div>
                </div>
            

        </>
    )
}

export default Contacts