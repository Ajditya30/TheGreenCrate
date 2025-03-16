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
    { day: 0, theGreenCrate: 100, traditional: 100 },
    { day: 1, theGreenCrate: 98.5, traditional: 97 },
    { day: 2, theGreenCrate: 97.2, traditional: 94.5 },
    { day: 3, theGreenCrate: 96.1, traditional: 91.8 },
    { day: 4, theGreenCrate: 95.3, traditional: 89.2 },
    { day: 5, theGreenCrate: 94.8, traditional: 86.5 },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-light/10 to-accent/10 py-24">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Our Research</h1>
            <p className="text-lg md:text-xl text-text-secondary">
              Exploring sustainable solutions for post-harvest preservation through scientific innovation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Research Methodology</h2>
            <p>A systematic approach to developing and testing sustainable packaging solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: '01',
                title: 'Problem Identification',
                description: 'Analysis of post-harvest losses in papaya storage and environmental impact of traditional packaging',
                items: [
                  'Market research and literature review',
                  'Stakeholder interviews',
                  'Current solution analysis',
                ],
              },
              {
                number: '02',
                title: 'Material Development',
                description: 'Engineering sustainable bamboo-based packaging with antimicrobial properties',
                items: [
                  'Bamboo fiber processing',
                  'Antimicrobial coating formulation',
                  'Prototype development',
                ],
              },
              {
                number: '03',
                title: 'Testing & Analysis',
                description: 'Rigorous experimental testing to validate effectiveness',
                items: [
                  'Weight loss measurement',
                  'Microbial growth analysis',
                  'Durability testing',
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                className="bg-white rounded-lg shadow-md p-8 relative overflow-hidden"
                variants={fadeIn}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
                <p className="text-text-secondary mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="section bg-background-light">
        <div className="container">
          <div className="section-title">
            <h2>Research Results</h2>
            <p>Quantitative analysis of TheGreenCrate's performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="lg:col-span-2 bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-text-primary mb-2">Weight Loss Comparison</h3>
              <p className="text-text-secondary mb-8">Papaya weight retention over 5 days</p>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={weightLossData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" label={{ value: 'Days', position: 'bottom' }} />
                  <YAxis label={{ value: 'Weight Retention (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="theGreenCrate"
                    name="TheGreenCrate"
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
              {[
                {
                  icon: '📊',
                  title: '20% Better Retention',
                  description: 'Significant improvement in weight retention compared to traditional packaging',
                },
                {
                  icon: '🦠',
                  title: 'Reduced Microbial Growth',
                  description: '75% reduction in surface bacterial count after 5 days',
                },
                {
                  icon: '♻️',
                  title: '100% Biodegradable',
                  description: 'Complete decomposition within 180 days under standard conditions',
                },
              ].map((finding, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4"
                >
                  <div className="text-3xl">{finding.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">{finding.title}</h4>
                    <p className="text-text-secondary">{finding.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Future Research</h2>
            <p>Expanding the scope of sustainable packaging solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Extended Applications',
                description: 'Testing effectiveness with different types of fresh produce and varying climate conditions',
              },
              {
                title: 'Material Optimization',
                description: 'Exploring additional sustainable materials and antimicrobial compounds',
              },
              {
                title: 'Scale-up Studies',
                description: 'Investigating industrial production feasibility and cost optimization',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 text-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research; 