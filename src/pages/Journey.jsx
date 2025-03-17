import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const steps = [
    {
      title: "Identifying the Problem",
      description: "We started by recognizing the critical issue of food wastage in our community and beyond.",
      weeks: "Weeks 1-2"
    },
    {
      title: "Developing Project Focus",
      description: "We narrowed our focus to perishable foods, specifically choosing papaya due to its significant transportation and storage challenges.",
      weeks: "Weeks 2-3"
    },
    {
      title: "Research Phase",
      description: "Our comprehensive research included:",
      bullets: [
        "Studying existing fruit packaging solutions & biodegradable materials",
        "Exploring cushioning options including newspaper shreds, coconut husk, and banana leaves",
        "Selecting bamboo for its feasibility, cost-effectiveness, and wide availability",
        "Adding anti-microbial properties to counter potential microbial growth in sustainable materials"
      ],
      weeks: "Weeks 3-5"
    },
    {
      title: "Design & Prototyping",
      description: "Moving from concept to reality through careful design and prototype development.",
      images: [
        {
          src: "/graphicdesign.jpg",
          alt: "Prototype Design Sketches"
        }
      ],
      weeks: "Weeks 5-6"
    },
    {
      title: "Building the Prototype",
      description: "Hands-on construction of our sustainable packaging solution.",
      images: [
        {
          src: "/prototype1.jpg",
          alt: "TheGreenCrate Prototype Construction"
        }
      ],
      weeks: "Weeks 5-6"
    },
    {
      title: "Cushioning Development",
      description: "Creating effective cushioning solutions using eco-friendly materials.",
      weeks: "Weeks 6-7"
    },
    {
      title: "Chemical Treatment Research",
      description: "Conducted microbial testing and mass loss analysis, ultimately selecting a 1%+1% combination of lactic and citric acid.",
      images: [
        {
          src: "/masslossanalysis.jpg",
          alt: "Preparing the Chemical Treatments"
        },
        {
          src: "/microbialtesting.jpg",
          alt: "Microbial Testing in Lab"
        }
      ],
      weeks: "Weeks 7-10"
    },
    {
      title: "Business Planning",
      description: "Developed a comprehensive business plan and calculated cost per unit.",
      weeks: "Weeks 11-12"
    },
    {
      title: "Product Evaluation",
      description: "Final assessment and identification of design improvements and cost reduction strategies.",
      weeks: "Weeks 11-12"
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
                
                <h3 className="text-xl font-semibold text-emerald-700 mb-1">{step.title}</h3>
                <p className="text-sm text-emerald-500 font-medium mb-3">{step.weeks}</p>
                <p className="text-gray-600 mb-2">{step.description}</p>
                {step.bullets && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm">{bullet}</li>
                    ))}
                  </ul>
                )}
                {step.images && (
                  <div className="grid grid-cols-1 gap-4 mt-6">
                    {step.images.map((image, i) => (
                      <div 
                        key={i} 
                        className="rounded-xl overflow-hidden shadow-lg border-2 border-emerald-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-auto object-cover"
                        />
                        <p className="text-sm font-medium text-center text-emerald-700 bg-emerald-50 p-3">{image.alt}</p>
                      </div>
                    ))}
                  </div>
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