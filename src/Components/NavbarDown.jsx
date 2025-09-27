import { BiGitCompare } from "react-icons/bi"
import { GrDown } from "react-icons/gr"
import { MdMenu, MdTrackChanges } from "react-icons/md"

const NavbarDown = () => {
    return(
        <nav className="w-full max-w-6xl mx-auto flex justify-between py-4 px-14 items-center top-3 z-10">
            <div className="flex gap-3 items-center text-black/60"> 
                <MdMenu size={19} className="cursor-pointer" />
                <ul className="flex gap-6"> 
                    <li className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer"><span>Category</span> <GrDown size={12} /></li>
                    <li className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer"><span>Brands</span> <GrDown size={12} /></li>
                    <li className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer"><span>Furniture</span> <GrDown size={12} /></li>
                    <li className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer"><span>Electronics</span> <GrDown size={12} /></li>
                </ul>
            </div>

            <ul className="flex gap-6"> 
                <li className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer"><MdTrackChanges /> <span>Track order</span></li>
                <li className="text-black/60 text-[14px] flex items-center gap-1.5 cursor-pointer"><BiGitCompare /> <span>Compare products</span></li>
            </ul>
        </nav>
    )
}

export default NavbarDown