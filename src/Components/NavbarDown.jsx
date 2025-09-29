import { useState } from "react"
import { BiGitCompare } from "react-icons/bi"
import { GrDown } from "react-icons/gr"
import { MdMenu, MdTrackChanges } from "react-icons/md"
import { Link } from "react-router-dom"

const NavbarDown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenOne, setIsOpenOne] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenThree, setIsOpenThree] = useState(false)

    return(
        <div className="shadow">
        <nav className="w-full max-w-6xl m-auto flex justify-between py-4 px-14 items-center top-3 z-10">
            <div className="flex gap-3 items-center text-black/60"> 
                <MdMenu size={19} className="cursor-pointer" />
                <ul className="flex gap-6"> 
                    <li onMouseEnter={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(!isOpen)} className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer relative"><span>Category</span> <GrDown size={12} /> { isOpen &&
                        <ul className="absolute top-4 z-10 p-5 px-9 flex flex-col rounded-xl gap-3 bg-white shadow">
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                        </ul>
                    }</li>
                    <li onMouseEnter={() => setIsOpenOne(!isOpenOne)} onMouseLeave={() => setIsOpenOne(!isOpenOne)} className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer relative"><span>Brands</span> <GrDown size={12} />{ isOpenOne &&
                        <ul className="absolute top-4 z-10 p-5 px-9 flex flex-col rounded-xl gap-3 bg-white shadow">
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                        </ul>
                    }</li>
                    <li onMouseEnter={() => setIsOpenTwo(!isOpenTwo)} onMouseLeave={() => setIsOpenTwo(!isOpenTwo)} className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer relative"><span>Furniture</span> <GrDown size={12} />{ isOpenTwo &&
                        <ul className="absolute top-4 z-10 p-5 px-9 flex flex-col rounded-xl gap-3 bg-white shadow">
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                        </ul>
                    }</li>
                    <li onMouseEnter={() => setIsOpenThree(!isOpenThree)} onMouseLeave={() => setIsOpenThree(!isOpenThree)} className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer relative"><span>Electronics</span> <GrDown size={12} />{ isOpenThree &&
                        <ul className="absolute top-4 z-10 p-5 px-9 flex flex-col rounded-xl gap-3 bg-white shadow">
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                            <li><Link>Electronic</Link></li>
                        </ul>
                    }</li>
                </ul>
            </div>

            <ul className="flex gap-6"> 
                <li className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer"><MdTrackChanges /> <span>Track order</span></li>
                <li className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer"><BiGitCompare /> <span>Compare products</span></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavbarDown