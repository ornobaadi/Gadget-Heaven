
const Banner = () => {
    return (
        <div>
            <div className="relative hero py-10 lg:py-32 bg-[#9538E2] rounded-b-xl min-h-96">
                <div className="hero-content text-center">
                    <div className="max-w-5xl text-white">
                        <h1 className="text-xl md:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="text-md py-6 w-2/3 mx-auto">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn mb-20 md:mb-40 bg-white text-[#9538E2] hover:text-white hover:bg-[#9538E2] rounded-full btn-primary px-10 border-[#9538E2] hover:border-[white]">Shop Now</button>
                    </div>
                </div>
                <div className="absolute bottom-[-200px] md:bottom-[-350px] w-4/5 md:w-3/5 rounded-xl mx-auto  border-[30px] border-white/20  ">
                    <img
                        className="rounded-xl overflow-hidden" src="/assets/banner.jpg" alt="banner image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;