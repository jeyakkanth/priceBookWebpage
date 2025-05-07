import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Choose a Service',
    description: 'Browse and select from available IT and cloud services.',
    icon: 'Squares2X2Icon',
  },
  {
    title: 'Enter Quantity or Options',
    description: 'Customize your service needs—set units, hours, or regions.',
    icon: 'WrenchIcon',
  },
  {
    title: 'Get Total Price & Export Quote',
    description: 'Instantly view pricing and download a branded quote.',
    icon: 'DocumentDuplicateIcon',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="secondary py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
         initial={{opacity:0 , x:-100}}
         transition={{duration:1.5}}
         whileInView={{opacity:1,x:0}}
         viewport={{once:true}}
      className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = HeroIcons[step.icon];
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;
