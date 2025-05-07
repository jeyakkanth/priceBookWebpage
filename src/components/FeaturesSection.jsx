import React from 'react';
import { GlobeAltIcon, CalculatorIcon, ClipboardDocumentIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Real-Time Price Calculation',
    description:
      'Instantly view accurate service prices based on your selections and input values.',
    icon: CalculatorIcon,
  },
  {
    name: 'Global Currency Support',
    description:
      'Supports multi-currency pricing across regions like UK, US, and EU.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Organized Service Categories',
    description:
      'Browse and select from clearly structured categories like Cloud, Security, and Support.',
    icon: Squares2X2Icon,
  },
  {
    name: 'Export Quotes Instantly',
    description:
      'Easily download or share custom quotes for your selected services.',
    icon: ClipboardDocumentIcon,
  },
];

const FeaturesSection = () => {
  return (
    <div className="primary py-16 px-4 sm:px-6 lg:px-8" id='Terms&Privacy'>
      <motion.div 
         initial={{opacity:0 , x:100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1,x:0}}
         viewport={{once:true}}
      className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Why Use Our Calculator?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 mx-auto text-blue-600">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
