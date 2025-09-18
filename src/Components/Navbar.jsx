import { FaSearch } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="flex justify-center items-center">
            <nav className="flex justify-between py-4 px-6 bg-neutral-50 items-center gap-60 rounded-4xl absolute top-3 z-10">
                <div className=" text-2xl">Logo</div>
                <ul className="flex gap-3">
                    <li><Link className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Home</Link></li>
                    <li><Link className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Shop</Link></li>
                    <li><Link className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Blog</Link></li>
                </ul>
                <div className="flex items-center gap-2">
                    <span className=" outline p-3 rounded-4xl cursor-pointer outline-gray-400 hover:bg-gray-200"><FaSearch /></span>
                    <span className=" outline p-3 rounded-4xl cursor-pointer outline-gray-400 hover:bg-gray-200"><FaCartShopping /></span>
                    <Link className="px-4 py-3 text-white bg-black rounded-2xl hover:bg-gray-600">Sign up</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar