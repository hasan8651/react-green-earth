
const Banner = () => {
    return (

            
    <section className="bg-[#CFF0DC]">
    <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8 items-center">
    
    <div className="hidden md:block">
    <img src="../../src/assets/hero-leaf1.png" alt="Banner_Image"/>
    </div>

    <div className="text-center">
    <h1 className="text-2xl md:text-3xl font-bold text-black">Plant a Tree, Grow a Future</h1>
    <p className="mt-4 opacity-90 text-md md:text-sm text-black"> Join our mission to plant 1 million trees and make the Earth greener for future generations.</p>
    <div className="mt-6">
    <button className="btn rounded-full bg-[#FACC15] hover:bg-amber-400 text-[#15803D] border-none active:scale-95">Get Involved</button>
    </div>
    </div>

    <div className="hidden md:block">
    <img src="../../src/assets/hero-leaf2.png" alt="Banner_Image"/> 
    </div>

    </div>
    </div>
    </section>

            

    );
};

export default Banner;