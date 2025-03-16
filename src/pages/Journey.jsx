import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const steps = [
    {
      title: "Identifying the Problem",
      description: "We started by recognizing the critical issue of food wastage in our community and beyond."
    },
    {
      title: "Developing Project Focus",
      description: "We narrowed our focus to perishable foods, specifically choosing papaya due to its significant transportation and storage challenges."
    },
    {
      title: "Research Phase",
      description: "Our comprehensive research included:",
      bullets: [
        "Studying existing fruit packaging solutions & biodegradable materials",
        "Exploring cushioning options including newspaper shreds, coconut husk, and banana leaves",
        "Selecting bamboo for its feasibility, cost-effectiveness, and wide availability",
        "Adding anti-microbial properties to counter potential microbial growth in sustainable materials"
      ]
    },
    {
      title: "Design & Prototyping",
      description: "Moving from concept to reality through careful design and prototype development."
    },
    {
      title: "Building the Prototype",
      description: "Hands-on construction of our sustainable packaging solution."
    },
    {
      title: "Cushioning Development",
      description: "Creating effective cushioning solutions using eco-friendly materials."
    },
    {
      title: "Chemical Treatment Research",
      description: "Conducted microbial testing and mass loss analysis, ultimately selecting a 1%+1% combination of lactic and citric acid."
    },
    {
      title: "Business Planning",
      description: "Developed a comprehensive business plan and calculated cost per unit."
    },
    {
      title: "Product Evaluation",
      description: "Final assessment and identification of design improvements and cost reduction strategies."
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">Our Journey</h1>
          <p className="text-xl text-emerald-600">From Concept to Innovation</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-emerald-200" />

          {/* Timeline items */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}
            >
              <div className="bg-white rounded-lg shadow-sm p-6 relative">
                {/* Timeline dot */}
                <div className="absolute top-6 -mt-1 w-4 h-4 rounded-full bg-emerald-500 shadow-lg transform -translate-x-1/2 left-0 md:left-auto md:right-0 md:translate-x-1/2" />
                
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                {step.bullets && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm">{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey; 