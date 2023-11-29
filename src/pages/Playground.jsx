import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineHome } from 'react-icons/hi'


function Playground() {
    return (
            <div>
                <NavLink
                to={'item.to'}
                className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
                onClick={() => {}}
            >
                <HiOutlineHome className="w-6 h-6 mr-2" />
                {'item.name'}
            </NavLink>
            <div className='text-white'>Playground</div>
            </div>

    )
}

export default Playground