import React, { use } from 'react';
import { FaUserLarge } from 'react-icons/fa6';
import { Link, NavLink, useNavigate } from 'react-router';
import "./Navbar.css"
import { AuthContext } from './Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();

    function handleLogOut() {
        logOut()
            .then()
            .catch()

        navigate("/")

    }
    const links =
        <>
            <NavLink className="mr-5 font-semibold" to="/">Home</NavLink>
            <NavLink className="mr-5 font-semibold" to="/plants">Plants</NavLink>
            <NavLink className="mr-5 font-semibold" to="/myProfile">My Profile</NavLink>
        </>

    const link1 =
        <>
            <li><Link to="/auth/login">Login</Link></li>
            <li><Link to="/auth/registration">Register</Link></li>
        </>
    const link2 =
        <div className='flex flex-col'>
            <button className='btn'>{user.displayName}</button>
            <button onClick={handleLogOut} className='btn'>Log Out</button>
        </div >

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
                            >
                                {
                                    user ?
                                        <FaUserLarge />
                                        : ""
                                }

                            </summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                {
                                    user ?
                                        link2
                                        : link1
                                }
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;