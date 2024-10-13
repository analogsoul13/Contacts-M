import React from 'react'

function Contacts() {
    return (
        <>
            <div className='p-4 bg-gray-200 w-full mt-2 h-full rounded-lg'>
                <div class="sm:-mx-4 lg:-mx-8">
                    <div class=" min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-auto rounded-lg shadow hidden md:block">
                            <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                <thead class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                                    <tr>
                                        <th scope="col" class="md:px-6 px-2 py-4">#</th>
                                        <th scope="col" class="md:px-6 px-2 py-4">Image</th>
                                        <th scope="col" class="md:px-6 px-2 py-4">Name</th>
                                        <th scope="col" class="md:px-6 px-2 py-4">Email</th>
                                        <th scope="col" class="md:px-6 px-2 py-4">Phone</th>
                                        <th scope="col" class="md:px-6 px-2 py-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4 font-medium">1</td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4 font-medium"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.craiyon.com%2F2023-09-25%2F0e0b2c79ded6467e8e458c5d7219be18.webp&f=1&nofb=1&ipt=34f7f01cb548aa626181cb07e087c1d30784b6befa63c14fe1671319cf8e595a&ipo=images " className='w-12 h-12 rounded-full' alt="" /></td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4">Geralt</td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4 text-blue-500 hover:underline hover:cursor-pointer">mark123@gmail.com</td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4">+912356487896</td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4">
                                            
                                                <button className='text-blue-500 hover:underline me-4'>View</button>
                                                <button className='text-red-500 hover:underline'>Delete</button>
                                            
                                        </td>
                                    </tr>
                                    <tr
                                        class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4 font-medium">2</td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4 font-medium"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpics.craiyon.com%2F2023-09-25%2F0e0b2c79ded6467e8e458c5d7219be18.webp&f=1&nofb=1&ipt=34f7f01cb548aa626181cb07e087c1d30784b6befa63c14fe1671319cf8e595a&ipo=images " className='w-12 h-12 rounded-full' alt="" /></td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4">Geralt</td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4 text-blue-500 hover:underline hover:cursor-pointer">mark123@gmail.com</td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4">+912356487896</td>
                                        <td class="whitespace-nowrap md:px-6 px-2 py-4">
                                            
                                                <button className='text-blue-500 hover:underline me-4'>View</button>
                                                <button className='text-red-500 hover:underline'>Delete</button>
                                            
                                        </td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                        {/* Mobile screens */}
                        <div className="grid grid-cols-1 gap-6 md:hidden">
                            <div className='bg-white p-2 rounded-lg shadow'>
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
                                <div className='flex mt-2 bg-gray-100 px-6 rounded-lg p-2 justify-between'>
                                    <button className='bg-blue-700 text-sm py-2 shadow px-6 font-light rounded-lg text-white' >Edit</button>
                                    <button className='bg-red-600 text-sm py-2 shadow px-6 font-light rounded-lg text-white' >Delete</button>
                                </div>
                            </div>
                            <div className='bg-white p-2 rounded-lg shadow'>
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
                                <div className='flex mt-2 bg-gray-100 px-6 rounded-lg p-2 justify-between'>
                                    <button className='bg-blue-700 text-sm py-2 shadow px-6 font-light rounded-lg text-white' >Edit</button>
                                    <button className='bg-red-600 text-sm py-2 shadow px-6 font-light rounded-lg text-white' >Delete</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contacts