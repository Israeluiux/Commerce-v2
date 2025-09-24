import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaX } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <section className=" px-4 sm:px-6 lg:px-32 py-8  max-w-screen-xl m-auto">
            <div className=" flex-col flex gap-6 mb-8 md:flex-row md:justify-between">
                {/* left */}
            <div className="flex gap-16">
                <div>
                    <p className="text-2xl mb-6 font-bold">About</p>
                    <ul>
                        <li className="text-[#525252] mb-2"><Link>Blog</Link></li>
                        <li className="text-[#525252] mb-2"><Link>Meet the team</Link></li>
                        <li className="text-[#525252] mb-2"><Link>Contact us</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="text-2xl mb-6 font-bold">Support</p>
                    <ul>
                        <li className="text-[#525252] mb-2"><Link>Contact us</Link></li>
                        <li className="text-[#525252] mb-2"><Link>Shopping</Link></li>
                        <li className="text-[#525252] mb-2"><Link>Return</Link></li>
                        <li className="text-[#525252] mb-2"><Link>FAQ</Link></li>
                    </ul>
                </div>
            </div>
        {/* right */}
            <div className="flex flex-col justify-end">
                <p className="text-[#3e3e3e] mb-4">Social media</p>
                <div className="flex gap-2">
                    <FaX size={30} className="outline p-1.5 rounded-4xl bg-black text-white"/>
                    <FaFacebookF size={30} className="outline p-1.5 rounded-4xl bg-black text-white"/>
                    <FaLinkedin size={30} className="outline p-1.5 rounded-4xl bg-black text-white"/>
                    <FaInstagram size={30} className="outline p-1.5 rounded-4xl bg-black text-white"/>
                </div>
            </div>
            </div>
            <div className="outline outline-gray-200"></div>
            <div className="flex-col gap-8 md:flex-row flex justify-between py-6 ">
                <p className="text-[#333]">Copyright &copy;2025 Balogun. All Right Reserved</p>
                <div className="flex gap-8">
                    <p className="text-[#333]"><Link>Term of service</Link></p>
                    <p className="text-[#333]"><Link>Policy Privacy</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Footer