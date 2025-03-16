import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useInView } from 'react-intersection-observer';

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample data for weight loss comparison
  const weightLossData = [
    { day: 0, greenCrate: 100, traditional: 100 },
    { day: 1, greenCrate: 98.5, traditional: 97 },
    { day: 2, greenCrate: 97.2, traditional: 94.5 },
    { day: 3, greenCrate: 96.1, traditional: 91.8 },
    { day: 4, greenCrate: 95.3, traditional: 89.2 },
    { day: 5, greenCrate: 94.8, traditional: 86.5 },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-r from-green-700 to-green-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Research</h1>
            <p className="text-xl text-gray-200">Exploring sustainable solutions for post-harvest preservation through scientific innovation</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Research Methodology</h2>
            <p className="text-gray-600 text-lg">A systematic approach to developing and testing sustainable packaging solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-4">01</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Problem Identification</h3>
              <p className="text-gray-600 mb-4">Analysis of post-harvest losses in papaya storage and environmental impact of traditional packaging</p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Market research and literature review</li>
                <li>Stakeholder interviews</li>
                <li>Current solution analysis</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-4">02</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Material Development</h3>
              <p className="text-gray-600 mb-4">Engineering sustainable bamboo-based packaging with antimicrobial properties</p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Bamboo fiber processing</li>
                <li>Antimicrobial coating formulation</li>
                <li>Prototype development</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-4">03</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Testing & Analysis</h3>
              <p className="text-gray-600 mb-4">Rigorous experimental testing to validate effectiveness</p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Weight loss measurement</li>
                <li>Microbial growth analysis</li>
                <li>Durability testing</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Research Results</h2>
            <p className="text-gray-600 text-lg">Quantitative analysis of The Green Crate's performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Weight Loss Comparison</h3>
              <p className="text-gray-600 mb-6">Papaya weight retention over 5 days</p>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={weightLossData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" label={{ value: 'Days', position: 'bottom' }} />
                  <YAxis label={{ value: 'Weight Retention (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="greenCrate"
                    name="Green Crate"
                    stroke="#4CAF50"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="traditional"
                    name="Traditional Packaging"
                    stroke="#FF9800"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">Key Findings</h3>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">📊</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">20% Better Retention</h4>
                    <p className="text-gray-600">Significant improvement in weight retention compared to traditional packaging</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🦠</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Reduced Microbial Growth</h4>
                    <p className="text-gray-600">75% reduction in surface bacterial count after 5 days</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">♻️</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">100% Biodegradable</h4>
                    <p className="text-gray-600">Complete decomposition within 180 days under standard conditions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Future Research</h2>
            <p className="text-gray-600 text-lg">Expanding the scope of sustainable packaging solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Extended Applications</h3>
              <p className="text-gray-600">Testing effectiveness with different types of fresh produce and varying climate conditions</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Material Optimization</h3>
              <p className="text-gray-600">Exploring additional sustainable materials and antimicrobial compounds</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Scale-up Studies</h3>
              <p className="text-gray-600">Investigating industrial production feasibility and cost optimization</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research; 