import { Link } from "react-router-dom";
import logo from '../../../assets/SL-100420-36140-17.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))

    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/register'>Register</Link></li>
        {user?.email ? <li><button onClick={handleLogOut}>Log Out</button></li> 
        : <li><Link to='/login'>Log In</Link></li>
        }


    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navItems}


                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className="w-[40px]" src={logo} alt="" />
                    <h1 className="text-rose-400 font-bold font-serif">PurrfectPathways</h1>

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}

                </ul>
            </div>
            <div className="navbar-end">

                <div className="drawer ">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn bg-rose-400 text-white drawer-button">DashBoard</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><Link to='/manageService'> My Services</Link></li>
                            <li><Link to='/addservices'> Add Services</Link></li>
                            <li><Link to='/mySchedules'>My-schedules</Link></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;