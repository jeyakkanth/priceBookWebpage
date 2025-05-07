import React from 'react';
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="flex flex-col secondary py-16 px-4 sm:px-6 lg:px-8" id='Home'>
      <motion.div
         initial={{opacity:0 , x:-100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1,x:0}}
         viewport={{once:true}}
      >
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
              
              <div className="lg:w-1/2 text-center lg:text-left flex flex-col ">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 ">
            Price Book Calculator
          </h1>
          <p className="text-gray-700 text-lg mb-6 font-bold">
            Calculate costs instantly using our global price book. Get accurate, transparent, and region-specific pricing for all your IT services.
          </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#CalculatorSection"
              className="px-6 py-3 primary text-white font-semibold rounded-xl hover:bg-green-950 transition"
            >
              Start Calculating
            </a>
            <a
              href="#ProductListPage"
              className="px-6 py-3 primary text-white font-semibold rounded-xl hover:bg-green-950 transition"
            >
              Browse Services
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <span className="text-2xl">🌐</span>
          <p className="mt-2 text-gray-700 font-medium">Global Pricing Support</p>
        </div>
        <div>
          <span className="text-2xl">💻</span>
          <p className="mt-2 text-gray-700 font-medium">Easy-to-Use Calculator</p>
        </div>
        <div>
          <span className="text-2xl">📄</span>
          <p className="mt-2 text-gray-700 font-medium">Instant Quote Download</p>
        </div>
        <div>
          <span className="text-2xl">🧾</span>
          <p className="mt-2 text-gray-700 font-medium">Transparent Itemized Costs</p>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
