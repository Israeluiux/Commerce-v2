import { useState } from "react"
import { BiCart, BiStore } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { MdSearch } from "react-icons/md"
import { GrDown } from "react-icons/gr"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const count = useSelector(state => state.cart.item)

    const totalItems = count.reduce((sum, item) => sum + item.qty, 0)


    return(
            <nav className="bg-white border-b border-b-[#d6d6d6] w-full z-100 top-0 left-0 ">
            <div className="w-full max-w-6xl mx-auto flex justify-between py-3 px-14 items-center top-3 z-10">
                {/* Logo */}
                <div className=" text-2xl font-bold">Logo</div>
                {/* Right side of the nav bar */}
            <div className="flex items-center gap-2">
                {/* Search box  */}
                <div className="flex items-center relative">
                    <input type="text"
                        className="outline outline-gray-300 bg-[#f5f5f5] p-2 ps-3 rounded-2xl w-100 placeholder:text-[12px]"
                        placeholder="What would you like to get?"
                    />
                    <button className="bg-red-500 p-2 absolute right-1 text-white text-[12px] rounded-xl flex items-center gap-1"> <MdSearch size={14} /> <span>Search</span></button>
                </div>
                {/* Quick nav links */}
                <ul className="hidden md:flex gap-2">
                    <li><Link to='/' className="px-2 py-1 text-black/60 text-[14px] rounded-2xl flex items-center gap-1.5"><BiStore /> <span>Stores</span></Link></li>
                    <li><Link to='/' className="px-2 py-1 text-black/60 text-[14px] rounded-2xl flex items-center gap-1.5"><span>Support</span><GrDown size={12} /> </Link></li>
                    <li><Link to='/' className="px-2 py-1 text-black/60 text-[14px] rounded-2xl flex items-center gap-1"><BiCart /> <span>Carts</span></Link></li>
                </ul>
                <button className="text-[14px] outline outline-red-600 py-1.5 px-3 text-red-500 rounded-xl">Login</button>
                <button className="text-[14px] py-1.5 px-3 bg-red-500 text-white rounded-xl">Sign Up</button>
            </div>
                </div>
            </nav>
    )
}

export default Navbar


// return(
//         <nav className="bg-white shadow-md w-full z-100 top-0 left-0 ">
//         <div className={ isOpen ? "rounded-t-4xl w-full max-w-6xl mx-auto flex justify-between py-3 px-8 items-center top-3 z-10" : "w-full max-w-6xl mx-auto flex justify-between py-3 px-8 items-center top-3 z-10"}>
//                 <div className=" text-2xl font-bold">Logo</div>
//                 <ul className="hidden md:flex gap-3">
//                     <li><Link to='/' className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Home</Link></li>
//                     <li><Link to='/categories' className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Categories</Link></li>
//                     <li><Link to='/products' className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Products</Link></li>
//                     <li><Link to='/blog' className="px-4 py-2.5 rounded-2xl hover:bg-gray-300">Blog</Link></li>
//                 </ul>
//                 <div className="hidden md:flex items-center gap-2">
//                     <span className="outline p-3 rounded-4xl cursor-pointer outline-gray-400 hover:bg-gray-200"><FaSearch /></span>
//                     <span onClick={() => navigate('/cart')} className="outline p-3 rounded-4xl cursor-pointer outline-gray-400 hover:bg-gray-200 relative"><FaCartShopping /><div className="h-5 w-5 bg-red-500 absolute top-0 -right-1 rounded-2xl flex justify-center items-center text-[12px] text-white">{totalItems === 0 ? 0 : totalItemsp}</div></span>
//                     <Link className="px-4 py-3 text-white bg-black rounded-3xl hover:bg-gray-600">Sign up</Link>
//                 </div>

//                 {
//                     isOpen && (
//                         <div className="absolute top-14 z-50 left-0 w-full bg-neutral-50 p-4 flex flex-col gap-3 md:hidden">
//                             <Link to='/' onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl hover:bg-gray-200">Home</Link>
//                             <Link to='/categories' onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl hover:bg-gray-200">Categories</Link>
//                             <Link to='/products' onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl hover:bg-gray-200">Products</Link>
//                             <Link to='/blog' onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-xl hover:bg-gray-200">Blog</Link>

//                             <div className="flex gap-2 mt-2">
//                                 <span className="outline p-3 rounded-xl cursor-pointer hover:bg-gray-200"><FaSearch /></span>
//                                 <span onClick={() => {navigate('/cart'), setIsOpen(false)}} className="outline p-3 rounded-xl cursor-pointer hover:bg-gray-200"><FaCartShopping /></span>
//                             </div>
//                             <Link className="px-4 py-3 text-white bg-black rounded-2xl hover:bg-gray-600 text-center">Sign up</Link>
//                         </div>
//                     )
//                 }
//                 <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaX /> : <BiMenu size={24} /> }</button>
//             </div>
//         </nav>
// )