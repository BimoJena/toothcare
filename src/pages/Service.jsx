import React from "react";

import DenatalCalculus from '../assets/DentalCalculus.png';
import DenatalCare from '../assets/DentalCare.png';
import DentalImplants from '../assets/DentalImplants.png';
import RemovalofTartar from '../assets/RemovalofTartar.png';
import TeethWhitening from '../assets/TeethWhitening.png';
import ToothInspection from '../assets/ToothInspection.png';
import toothProtection from '../assets/toothProtection.png';
import ToothRemoval from '../assets/ToothRemoval.png';
import service from '../assets/service.jpeg';

const services = [
  {
    title: "Tooth Protection",
    description: "Comprehensive treatments to prevent cavities and strengthen enamel.",
    icon: toothProtection,
  },
  {
    title: "Dental Implants",
    description: "Secure, long-lasting replacements for missing or damaged teeth.",
    icon: DentalImplants,
  },
  {
    title: "Dental Care",
    description: "Routine checkups and professional cleanings to maintain oral health.",
    icon: DenatalCare,
  },
  {
    title: "Teeth Whitening",
    description: "Advanced whitening solutions for a visibly brighter smile.",
    icon: TeethWhitening,
  },
  {
    title: "Dental Calculus",
    description: "Expert removal of hardened plaque to prevent gum disease.",
    icon: DenatalCalculus,
  },
  {
    title: "Tooth Removal",
    description: "Safe and comfortable extractions for decayed or impacted teeth.",
    icon: ToothRemoval,
  },
  {
    title: "Removal of Tartar",
    description: "Thorough scaling to eliminate tartar buildup below the gumline.",
    icon: RemovalofTartar,
  },
  {
    title: "Tooth Inspection",
    description: "Detailed oral exams using modern tools to detect dental issues early.",
    icon: ToothInspection,
  },
];

const Service = () => {
  return (
    <>
      <div className="relative w-full h-[60vh]">
        <img
          src={service}
          alt="Service Hero"
          className="w-full h-full object-cover md:object-[center_25%]"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-[Arial]">
            Our Services
          </h1>
        </div>
      </div>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-6 text-left transition duration-300 hover:bg-slate-900 hover:text-white"
              >
                <div className="mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 object-contain mx-auto lg:mx-0 transition duration-300 filter sepia saturate-200 hue-rotate-[190deg] group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-[Arial] transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white font-[Arial] text-sm transition duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
