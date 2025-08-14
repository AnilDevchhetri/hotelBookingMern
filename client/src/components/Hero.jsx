import React from "react"

const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
            <p className="bg-[#49B9ff]/50 px-3.5 py-1 rounded-full mt-20">The Ultimate Hotel Experience</p>
            <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">Lorem ipsum dolor sit amet Lorem, ipsum.</h1>
            <p className="max-w-130 mt-2 text-sm md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut ipsam corporis doloremque praesentium repellat atque unde nam vero reprehenderit?</p>
        </div>
    )
}
export default Hero;