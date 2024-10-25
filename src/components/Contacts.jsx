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
                {/* All Contacts */}
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
                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='bg-[#ff8040] text-sm py-2 shadow px-6 font-light rounded-lg text-white'>
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