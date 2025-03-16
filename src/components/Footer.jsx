import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    {
      title: 'Quick Links',
      items: [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Journey', id: 'timeline' },
        { label: 'Team', id: 'team' },
      ],
    },
    {
      title: 'Research Areas',
      items: [
        { label: 'Post-Harvest Technology' },
        { label: 'Sustainable Materials' },
        { label: 'Food Preservation' },
        { label: 'Environmental Impact' },
      ],
    },
  ];

  return (
    <footer className="bg-white mt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-[#4A154B] mb-4">TheGreenCrate</h3>
            <p className="text-gray-600">
              A research-driven sustainable packaging solution for the IB Group 4 science research initiative.
            </p>
          </div>

          {/* Quick Links and Research Areas */}
          {sections.map((section, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="text-lg font-semibold text-[#4A154B] mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    {item.id ? (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-gray-600 hover:text-[#4A154B] transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <span className="text-gray-600">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-[#4A154B] mb-4">Contact</h4>
            <p className="text-gray-600 mb-2">For research inquiries:</p>
            <a
              href="mailto:research@thegreencrate.org"
              className="text-[#4A154B] hover:text-[#9BE564] transition-colors duration-200"
            >
              research@thegreencrate.org
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600 text-sm mb-2">
            &copy; {new Date().getFullYear()} TheGreenCrate. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            An IB Group 4 Research Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 