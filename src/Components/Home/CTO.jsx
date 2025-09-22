const CTO = ({ size, small, medium }) => {
    return(
        <section className={`${small} sm:${medium}  lg:${size} py-8 max-w-screen-xl m-auto`}>
            <div className="p-6 bg-gray-950 h-auto rounded-3xl text-white flex lg:flex-row lg:gap-28 ">
                <div className="flex flex-col gap-6 justify-between">
                    <p className=" w-[90%] md:w-[100%] text-5xl leading-14  sm:text-6xl sm:leading-18">Ready to Get Our New Stuff</p>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, id.</p> */}
                    <div className="relative flex items-center w-full sm:w-100">
                        <input type="text" placeholder="Enter your mail" className="bg-white p-4 box-border text-black w-full sm:w-100 h-15 rounded-4xl" />
                        <button className="absolute right-1 bg-gray-900 py-3 px-4 rounded-3xl">Send</button>
                    </div>
                </div>
                <div className=" hidden lg:flex items-end">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit porro voluptas eum odit quo eius distinctio iste amet perferendis</p>
                </div>
            </div>
        </section>
    )
}

export default CTO