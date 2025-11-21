import React from 'react';
import { FaUserLarge } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"

const Navbar = () => {
    const links =
        <>
            <NavLink className="mr-5 font-semibold" to="/">Home</NavLink>
            <NavLink className="mr-5 font-semibold" to="/plants">Plants</NavLink>
            <NavLink className="mr-5 font-semibold" to="/myProfile">My Profile</NavLink>
        </>
    return (
        <div className="navbar  shadow-sm max-w-7xl mx-auto bg-[#e2ecd8] py-0 ">
            <div className="flex-1 font-bold text-xl">
                <a className="btn btn-ghost text-xl">
                    <span className='text-green-500'>Green</span><span className='text-yellow-600'>Nest</span>
                </a>
            </div>
            <div>
                {links}
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <li>
                        <details>
                            <summary
                                className='h-[60px] w-[60px]'
                            ><FaUserLarge />
                            </summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><Link to="/auth/login">Login</Link></li>
                                <li><Link to="/auth/registration">Register</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;