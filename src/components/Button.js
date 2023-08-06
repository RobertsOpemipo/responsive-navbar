import React from 'react'

export const Button = (props) => {
    return (
        <button className='bg-blue-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-blue-400 duration-500'>
            {props.children}
        </button>
    )
}
