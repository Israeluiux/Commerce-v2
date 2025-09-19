import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { FaHamburger } from "react-icons/fa"
import { BiMenu } from "react-icons/bi"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)


    return(
        <div className="flex justify-center items-center">
            <nav className="bg-white shadow-md w-full z-100 top-0 left-0 flex justify-center items-center">
            <div className={ isOpen ? "rounded-t-4xl w-full max-w-6xl mx-auto flex justify-between py-3 px-4 bg-neutral-50 items-center md:rounded-4xl absolute top-3 z-10 shadow " : "w-full max-w-6xl mx-auto flex justify-between py-3 px-4 bg-neutral-50 items-center rounded-4xl absolute top-3 z-10 shadow "}>
                    <div className=" text-2xl font-bold">Logo</div>
                    <ul className="hidden md:flex gap-3">
                        <li><Link className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Home</Link></li>
                        <li><Link className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Shop</Link></li>
                        <li><Link className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Blog</Link></li>
                    </ul>
                    <div className="hidden md:flex items-center gap-2">
                        <span className=" outline p-3 rounded-4xl cursor-pointer outline-gray-400 hover:bg-gray-200"><FaSearch /></span>
                        <span className=" outline p-3 rounded-4xl cursor-pointer outline-gray-400 hover:bg-gray-200"><FaCartShopping /></span>
                        <Link className="px-4 py-3 text-white bg-black rounded-3xl hover:bg-gray-600">Sign up</Link>
                    </div>

                    {
                        isOpen && (
                            <div className="absolute top-16 left-0 w-full bg-neutral-50 rounded-b-4xl shadow-md p-4 flex flex-col gap-3 md:hidden">
                                <Link className="px-4 py-2 rounded-xl hover:bg-gray-200">Home</Link>
                                <Link className="px-4 py-2 rounded-xl hover:bg-gray-200">Shop</Link>
                                <Link className="px-4 py-2 rounded-xl hover:bg-gray-200">Blog</Link>

                                <div className="flex gap-2 mt-2">
                                    <span className="outline p-3 rounded-xl cursor-pointer hover:bg-gray-200"><FaSearch /></span>
                                    <span className="outline p-3 rounded-xl cursor-pointer hover:bg-gray-200"><FaCartShopping /></span>
                                </div>
                                <Link className="px-4 py-3 text-white bg-black rounded-2xl hover:bg-gray-600 text-center">Sign up</Link>
                            </div>
                        )
                    }
                    <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'X' : <BiMenu size={24} /> }</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar