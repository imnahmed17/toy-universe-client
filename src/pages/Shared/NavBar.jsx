import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GiRobotHelmet } from 'react-icons/gi';

const NavBar = () => {
    const { user } = useContext(AuthContext);

    const handleLogOut = () => {};

    const navItems = <>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/all-toys" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                All Toys
            </NavLink>
        </li>
        {
            user?.email ? <>
                <li>
                    <NavLink to="/my-toys" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        My Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-a-toy" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        Add A Toy
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                        Blogs
                    </NavLink>
                </li>
                <li><NavLink onClick={handleLogOut}>Log out</NavLink></li>
            </> : <li>
                <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    Blogs
                </NavLink>
            </li>
        }
    </>

    return (
        <div className="navbar bg-base-200 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="hover:bg-gray-100 btn btn-ghost normal-case text-2xl h-full">
                    <GiRobotHelmet style={{ color: '#00BFFF' }} size={50} />
                    <p className="ml-1 font-bold tracking-wide">Toy Universe</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="avatar flex items-center">
                            <div className="w-12 rounded-full">
                                <img src="https://www.hannibalsafari.com.au/wp-content/uploads/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link>
                                    <a className="font-medium" onClick={handleLogOut}>Logout</a>
                                </Link>
                            </li>
                        </ul>
                    </div> : <a className="btn btn-sm btn-active btn-ghost font-bold text-gray-700 normal-case">Login</a>
                }
            </div>
        </div>
    );
};

export default NavBar;