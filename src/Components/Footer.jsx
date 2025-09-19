const Footer = () => {
    return(
        <section className="px-32 py-8">
            <div className="flex justify-between mb-8">
                {/* left */}
            <div className="flex gap-16">
                <div>
                    <p className="text-2xl mb-6 font-bold">About</p>
                    <ul>
                        <li className="text-[#525252] mb-2">Blog</li>
                        <li className="text-[#525252] mb-2">Meet the team</li>
                        <li className="text-[#525252] mb-2">Contact us</li>
                    </ul>
                </div>
                <div>
                    <p className="text-2xl mb-6 font-bold">Support</p>
                    <ul>
                        <li className="text-[#525252] mb-2">Contact us</li>
                        <li className="text-[#525252] mb-2">Shopping</li>
                        <li className="text-[#525252] mb-2">Return</li>
                        <li className="text-[#525252] mb-2">FAQ</li>
                    </ul>
                </div>
            </div>
        {/* right */}
            <div className="flex flex-col justify-end">
                <p className="text-[#3e3e3e]">Social media</p>
                <div className="flex">
                    <p>Twitter</p>
                    <p>Twitter</p>
                    <p>Twitter</p>
                    <p>Twitter</p>
                </div>
            </div>
            </div>
            <div className="outline outline-gray-200"></div>
            <div className="flex justify-between py-6">
                <p className="text-[#333]">Copyright &copy;2025 Balogun. All Right Reserved</p>
                <div className="flex gap-8">
                    <p className="text-[#333]">Term of service</p>
                    <p className="text-[#333]">Policy Privacy</p>
                </div>
            </div>
        </section>
    )
}

export default Footer