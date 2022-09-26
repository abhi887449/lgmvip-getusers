import React from 'react'
import logo from '../abhishek.png'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation()
    const path = location.pathname
    return (
        <div className='flex bg-sky-blue'>
            <img className='m-2' src={logo} alt="logo" height="60px" />
            <div className="flex justify-center content-center ml-auto">
                <Link className={`pr-20 font-bold navele ${(path==="/lgmvip-getusers")? "active":""}`} to="/lgmvip-getusers">Home</Link>
                <Link className={`pr-20 font-bold navele ${(path==="/getusers")? "active":""}`} to="/getusers">Get Users</Link>
            </div>
        </div>
    )
}

export default Navbar
