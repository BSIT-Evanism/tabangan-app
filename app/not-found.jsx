import Link from 'next/link'
import React from 'react'

function notfound() {
    return (
        <div className='container flex justify-center items-center'>
            <div className='w-full h-52 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold text-center p-10'>Maybe this is not the page you&apos;re looking for</h1>
                <Link href='/'>
                    <button className='bg-gray-200 p-7 rounded-lg'>Go back to home</button>
                </Link>
            </div>
        </div>
    )
}

export default notfound