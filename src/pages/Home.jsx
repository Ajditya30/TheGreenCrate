import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const teamMembers = [
    { name: "Sparsh Phutela", role: "Mentor" },
    { name: "Neil Chadha", role: "Team Member" },
    { name: "Aditya Jain", role: "Team Member" },
    { name: "Sahaj Khurana", role: "Team Member" },
    { name: "Aakarshan Rai", role: "Team Member" },
    { name: "Shivtosh Singh", role: "Team Member" },
    { name: "Adhyan Seth", role: "Team Member" },
    { name: "Manicka Kumar", role: "Team Member" },
    { name: "Aarush Batra", role: "Team Member" }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-600">
        <motion.h1 
          className="text-8xl md:text-9xl font-bold text-white mb-6"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          TheGreenCrate
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/90 max-w-3xl text-center px-4"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          Anti-microbial, Sustainable Packaging for Commercial Transport & Storage of Fresh Produce
        </motion.p>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="h-screen bg-white flex flex-col justify-center pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Problem</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              {
                title: "High Post-harvest Losses",
                description: "Significant food waste occurs during transportation and storage."
              },
              {
                title: "Food Waste Crisis",
                description: "Millions of tons of food are wasted annually due to inadequate packaging."
              },
              {
                title: "Farmer's & Retailer's Loss",
                description: "Substantial economic losses due to produce spoilage and waste."
              },
              {
                title: "Unsustainable Packaging",
                description: "Current solutions contribute to environmental degradation."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-emerald-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="min-h-screen bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-16">Our Solution: TheGreenCrate</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Features */}
            <div className="lg:col-span-2 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Bamboo-based Storage Box</h3>
                <p className="text-gray-600">Durable, eco-friendly, and fully biodegradable solution for sustainable packaging.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Antimicrobial Treatment</h3>
                <p className="text-gray-600">A special chemical treatment prepared to prevent microbial growth, significantly extending shelf life.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Innovative Cushioning</h3>
                <p className="text-gray-600">Paper bags with newspaper shreds provide excellent protection while maintaining sustainability.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">Scalable Solution</h3>
                <p className="text-gray-600">Designed for commercial packaging beyond papayas, reducing spoilage and increasing profitability for farmers & retailers.</p>
              </motion.div>
            </div>

            {/* Right column - Images */}
            <div className="lg:col-span-1 space-y-12 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden h-64"
              >
                <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
                  <img 
                    src="prototype1.jpg" 
                    alt="TheGreenCrate Prototype 1" 
                    className="w-full h-full object-contain p-2 rounded-lg"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden h-64"
              >
                <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
                  <img 
                    src="prototype2.jpg" 
                    alt="TheGreenCrate Prototype 2" 
                    className="w-full h-full object-contain p-2 rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Vision & Mission Statement</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-emerald-50 leading-relaxed">
                Supporting SDG 12: Responsible Consumption and Production through innovative sustainable packaging solutions that minimize food waste and promote eco-friendly practices in the agricultural supply chain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-700 to-emerald-800 p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-emerald-50 leading-relaxed">
                Contributing to SDG 13: Climate Action by revolutionizing the packaging industry with biodegradable solutions that reduce carbon footprint and promote environmental sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Testimonials</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-video bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/aa4YGXIXtJM"
                title="TheGreenCrate Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Testimonials Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4 overflow-hidden">
                    <img 
                      src="Rakeshkumar.jpg" 
                      alt="Rakesh Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-800">Rakesh Kumar</h4>
                    <p className="text-emerald-600">Local Farmer, Haryana</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"I lose at least 3-4 papayas out of 10 when storing in plastic crates, whereas using TheGreenCrate, I only lost 1."</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4 overflow-hidden">
                    <img 
                      src="satish.jpg" 
                      alt="Satish"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-800">Satish</h4>
                    <p className="text-emerald-600">Shop Owner, Haryana</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"The papayas that would normally spoil in 3-4 days now have a shelf-life for 7-8 days without rotting/spoiling."</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Meet the Team</h2>
            <p className="text-xl text-emerald-600">IBDP 1 Team from DPS International, Gurgaon</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-2xl text-emerald-700">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-emerald-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home; 