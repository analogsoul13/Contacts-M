import { Link } from 'react-router-dom'

function Contacts() {

    return (
        <>

            <div className=" min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-auto rounded-lg shadow hidden md:block">
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
                                <td className="whitespace-nowrap md:px-6 px-2 py-4 font-medium">1</td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4 font-medium"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.craiyon.com%2F2023-09-25%2F0e0b2c79ded6467e8e458c5d7219be18.webp&f=1&nofb=1&ipt=34f7f01cb548aa626181cb07e087c1d30784b6befa63c14fe1671319cf8e595a&ipo=images " className='w-12 h-12 rounded-full' alt="" /></td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4">Geralt</td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4 text-blue-500 hover:underline hover:cursor-pointer">geralt@gmail.com</td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4">+912356487896</td>
                                <td className="whitespace-nowrap md:px-6 px-2 py-4">

                                    <button className='text-blue-500 hover:underline me-4'>View</button>
                                    <button className='text-red-500 hover:underline'>Delete</button>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                {/* Mobile screens */}
                <div className="grid grid-cols-1 gap-6 md:hidden">
                    <div className='bg-[#000000] p-2 rounded-lg shadow-xl'>
                        <div className='flex'>
                            <div className='flex w-1/2 items-center h-full p-4 m-2 font-light text-sm'>
                                <img className='rounded-full' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.craiyon.com%2F2023-09-25%2F0e0b2c79ded6467e8e458c5d7219be18.webp&f=1&nofb=1&ipt=34f7f01cb548aa626181cb07e087c1d30784b6befa63c14fe1671319cf8e595a&ipo=images" alt="" />
                            </div>
                            <div className='flex flex-col gap-2 justify-center p-2 items-start font-light text-sm'>
                                <div className='font-bold'>1</div>
                                <div className='font-bold'>Name</div>
                                <h1>Geralt of Rivia</h1>
                                <div className='font-bold'>Email</div>
                                <h1>geralt34@gmail.com</h1>
                                <div className='font-bold'>Phone</div>
                                <h1>+918978589698</h1>
                            </div>
                        </div>
                        <div className='flex mt-2 bg-gray-600 px-6 rounded-lg p-2 justify-between'>
                            <Link className='bg-[#ff8040] text-sm py-2 shadow px-6 font-light rounded-lg text-white' to={'/editcontact'}>
                                Edit
                            </Link>
                            <button className='bg-red-600 text-sm py-2 shadow px-6 font-light rounded-lg text-white' >Delete</button>
                        </div>
                    </div>

                    <div className='bg-[#000000] p-2 rounded-lg shadow-xl'>
                        <div className='flex'>
                            <div className='flex w-1/2 items-center h-full p-4 m-2 font-light text-sm'>
                                <img className='rounded-full' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.craiyon.com%2F2023-09-25%2F0e0b2c79ded6467e8e458c5d7219be18.webp&f=1&nofb=1&ipt=34f7f01cb548aa626181cb07e087c1d30784b6befa63c14fe1671319cf8e595a&ipo=images" alt="" />
                            </div>
                            <div className='flex flex-col gap-2 justify-center p-2 items-start font-light text-sm'>
                                <div className='font-bold'>1</div>
                                <div className='font-bold'>Name</div>
                                <h1>Geralt of Rivia</h1>
                                <div className='font-bold'>Email</div>
                                <h1>geralt34@gmail.com</h1>
                                <div className='font-bold'>Phone</div>
                                <h1>+918978589698</h1>
                            </div>
                        </div>
                        <div className='flex mt-2 bg-gray-600 px-6 rounded-lg p-2 justify-between'>
                            <Link className='bg-[#ff8040] text-sm py-2 shadow px-6 font-light rounded-lg text-white' to={'/editcontact'}>
                                Edit
                            </Link>

                            <button className='bg-red-600 text-sm py-2 shadow px-6 font-light rounded-lg text-white' >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contacts