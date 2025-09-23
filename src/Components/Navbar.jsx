import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { FaCartShopping, FaX } from "react-icons/fa6"
import { BiMenu } from "react-icons/bi"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)


    return(
            <nav className="bg-white shadow-md w-full z-100 top-0 left-0 ">
            <div className={ isOpen ? "rounded-t-4xl w-full max-w-6xl mx-auto flex justify-between py-3 px-8 items-center top-3 z-10" : "w-full max-w-6xl mx-auto flex justify-between py-3 px-8 items-center top-3 z-10"}>
                    <div className=" text-2xl font-bold">Logo</div>
                    <ul className="hidden md:flex gap-3">
                        <li><Link to='/' className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Home</Link></li>
                        <li><Link to='/categories' className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Categories</Link></li>
                        <li><Link to='/products' className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Products</Link></li>
                        <li><Link to='/blog' className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Blog</Link></li>
                    </ul>
                    <div className="hidden md:flex items-center gap-2">
                        <span className=" outline p-3 rounded-4xl cursor-pointer outline-gray-400 hover:bg-gray-200"><FaSearch /></span>
                        <span className=" outline p-3 rounded-4xl cursor-pointer outline-gray-400 hover:bg-gray-200"><FaCartShopping /></span>
                        <Link className="px-4 py-3 text-white bg-black rounded-3xl hover:bg-gray-600">Sign up</Link>
                    </div>

                    {
                        isOpen && (
                            <div className="absolute top-14 z-50 left-0 w-full bg-neutral-50 p-4 flex flex-col gap-3 md:hidden">
                                <Link to='/' onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl hover:bg-gray-200">Home</Link>
                                <Link to='/categories' onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl hover:bg-gray-200">Categories</Link>
                                <Link to='/products' onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl hover:bg-gray-200">Products</Link>
                                <Link to='/blog' onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl hover:bg-gray-200">Blog</Link>

                                <div className="flex gap-2 mt-2">
                                    <span className="outline p-3 rounded-xl cursor-pointer hover:bg-gray-200"><FaSearch /></span>
                                    <span className="outline p-3 rounded-xl cursor-pointer hover:bg-gray-200"><FaCartShopping /></span>
                                </div>
                                <Link className="px-4 py-3 text-white bg-black rounded-2xl hover:bg-gray-600 text-center">Sign up</Link>
                            </div>
                        )
                    }
                    <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaX /> : <BiMenu size={24} /> }</button>
                </div>
            </nav>
    )
}

export default Navbar