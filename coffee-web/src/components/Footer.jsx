import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
            <div className="w-full md:w-1/4">
                <h1 className="font-semibold text-xl pb-4">CafePulse</h1>
                <p className="text-sm">
                    Welcome to our coffee heaven! Explore our aromatic
                    brews,and discover the perfect roas to elevate your daily ritual. 
                </p>
            </div>
            <div>
              <h1 className=' font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
              <nav>
                <a className="hover:text-backgroundColor transition-all cursor-pointer" href="/">Menu</a>
                <a className="hover:text-backgroundColor transition-all cursor-pointer" href="/">About Us</a>
                <a className="hover:text-backgroundColor transition-all cursor-pointer" href="/">Products</a>
                <a className="hover:text-backgroundColor transition-all cursor-pointer" href="/">Reviews</a>
              </nav>
            </div>
        </div>
    </div>
  )
}

export default Footer