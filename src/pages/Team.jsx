import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Lead Researcher',
      focus: 'Material Science',
      description: 'Specializing in sustainable materials and biodegradable packaging solutions.',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'David Kumar',
      role: 'Research Assistant',
      focus: 'Microbiology',
      description: 'Focusing on antimicrobial properties and food preservation techniques.',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Data Analyst',
      focus: 'Statistical Analysis',
      description: 'Leading the quantitative analysis and experimental design.',
      image: '/images/placeholder.jpg'
    },
    {
      name: 'Michael Patel',
      role: 'Research Assistant',
      focus: 'Environmental Science',
      description: 'Studying environmental impact and sustainability metrics.',
      image: '/images/placeholder.jpg'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Lisa Thompson',
      role: 'Faculty Advisor',
      department: 'Environmental Science',
      description: 'Providing guidance on research methodology and environmental impact assessment.'
    },
    {
      name: 'Prof. James Wilson',
      role: 'Technical Advisor',
      department: 'Materials Engineering',
      description: 'Supporting material development and testing procedures.'
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
              Meet Our Team
            </h1>
            <p className="text-lg text-text-secondary">
              A dedicated group of student researchers working towards sustainable packaging solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Student Researchers</h2>
            <p>The minds behind The Green Crate initiative</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-light to-primary overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-text-secondary mb-3">{member.focus}</p>
                <p className="text-text-secondary text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="section bg-background-light">
        <div className="container">
          <div className="section-title">
            <h2>Faculty Advisors</h2>
            <p>Guiding our research and development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                className="card flex items-start gap-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-primary">
                    {advisor.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-primary font-medium mb-1">{advisor.role}</p>
                  <p className="text-sm text-text-secondary mb-3">
                    {advisor.department}
                  </p>
                  <p className="text-text-secondary">
                    {advisor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Research Initiative
            </h2>
            <p className="text-lg mb-8 text-primary-light">
              Are you passionate about sustainable solutions and scientific research?
              We're always looking for motivated students to join our team.
            </p>
            <a
              href="mailto:research@thegreencrate.org"
              className="inline-block bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-primary-light transition-colors duration-200"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team; 