"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className='bg-slate-900 '>
            <div className=" navbar  max-w-7xl mx-auto shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Link href={'/'}><li><a>Home</a></li></Link>
                            <Link href={'/products'}><li><a>Products</a></li></Link>
                            <Link href={'/profile'}><li><a>My Profile</a></li></Link>
                        </ul>
                    </div>
                    <a className="text-3xl font-extrabold">
                        <span className="text-orange-500">Sun</span>
                        <span className="text-sky-400">Cart</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-5">
                        <Link href={'/'} className={` rounded-xl ${pathname === "/"
                            ? "bg-orange-500 font-bold text-white"
                            : "text-white font-bold hover:bg-orange-500"
                            }`}><li><a>Home</a></li></Link>
                        <Link href={'/products'} className={` rounded-xl ${pathname === "/products"
                            ? "bg-orange-500 font-bold text-white"
                            : "text-white font-bold hover:bg-orange-500"
                            }`}><li><a>Products</a></li></Link>
                        <Link href={'/profile'} className={` rounded-xl ${pathname === "/profile"
                            ? "bg-orange-500 font-bold text-white"
                            : "text-white font-bold hover:bg-orange-500"
                            }`}><li><a>My Profile</a></li></Link>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;