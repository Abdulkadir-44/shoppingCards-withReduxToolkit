import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {

    const basketCounter = useSelector(state=>state.counter.totalItems)
    
    return (
        <header className='w-full h-16 bg-[#933131] flex items-center'>
            <nav className='w-full flex items-center justify-between px-6'>
                <div>
                    <img className='w-24' src={logo} alt="There isn't picture" />
                </div>
                <ul className='flex gap-x-6 text-white'>
                    <li className='flex items-center hover:bg-white hover:text-black px-2 rounded-sm duration-200 outline-none'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='flex items-center'>
                        <Link to="/basket">
                        {
                            basketCounter == 0 ? <i className="bi bi-cart4 text-2xl px-2 cursor-pointer hover:text-gray-300"></i>
                            : (<div className='flex relative'>
                                <i className="bi bi-cart4 text-2xl px-2 cursor-pointer text-gray-300"></i>
                                <span className='absolute left-6 -top-3 font-semibold'>{basketCounter}</span>
                            </div>)
                        }
                        </Link>
                    </li>
                    <li className='relative w-10 h-10 flex duration-200 justify-center text-2xl bg-[#C8A93D] rounded-full  hover:bg-yellow-400'>
                        <div className='absolute top-[4px] font-poppins cursor-pointer'>
                            A
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header