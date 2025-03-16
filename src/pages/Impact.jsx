import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Impact = () => {
  const environmentalData = [
    {
      category: 'Waste Reduction',
      traditional: 100,
      theGreenCrate: 20,
    },
    {
      category: 'Carbon Footprint',
      traditional: 100,
      theGreenCrate: 35,
    },
    {
      category: 'Water Usage',
      traditional: 100,
      theGreenCrate: 45,
    },
  ];

  const impactStats = [
    {
      number: '80%',
      label: 'Less Plastic Waste',
      description: 'Reduction in non-biodegradable packaging waste'
    },
    {
      number: '65%',
      label: 'Lower Carbon Footprint',
      description: 'Decreased environmental impact in production and disposal'
    },
    {
      number: '55%',
      label: 'Water Conservation',
      description: 'Reduction in water usage compared to traditional packaging'
    }
  ];

  const sustainabilityFeatures = [
    {
      icon: '🌿',
      title: 'Biodegradable Materials',
      description: 'Our bamboo-based crates decompose naturally within 180 days'
    },
    {
      icon: '♻️',
      title: 'Circular Economy',
      description: 'Supporting sustainable resource management and waste reduction'
    },
    {
      icon: '🌡️',
      title: 'Energy Efficient',
      description: 'Lower energy consumption in production and transportation'
    },
    {
      icon: '💧',
      title: 'Water Conservation',
      description: 'Minimal water usage in manufacturing process'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/10 to-accent/10 py-24">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Environmental Impact
            </h1>
            <p className="text-lg text-text-secondary">
              Measuring our contribution to sustainability and environmental conservation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {stat.label}
                </h3>
                <p className="text-text-secondary">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Chart Section */}
      <section className="section bg-background-light">
        <div className="container">
          <div className="section-title">
            <h2>Environmental Impact Comparison</h2>
            <p>TheGreenCrate vs Traditional Packaging (Baseline 100%)</p>
          </div>

          <motion.div
            className="card mt-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={environmentalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="traditional"
                    name="Traditional Packaging"
                    fill="#FF9800"
                  />
                  <Bar
                    dataKey="theGreenCrate"
                    name="TheGreenCrate"
                    fill="#4CAF50"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Sustainability Features</h2>
            <p>Key elements that make TheGreenCrate environmentally friendly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {sustainabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Sustainable Packaging Movement
            </h2>
            <p className="text-lg mb-8 text-primary-light">
              Help us create a more sustainable future for fresh produce packaging.
              Every small change makes a big difference.
            </p>
            <a
              href="mailto:contact@thegreencrate.org"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-primary-light transition-colors duration-200"
            >
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact; 