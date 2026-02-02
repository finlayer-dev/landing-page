import React from 'react';

// Simple monochrome SVG icons
const icons = {
  bank: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  gem: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  )
};

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      title: 'Financial Institution Integration',
      description: 'Banks and financial institutions can leverage FinLayer for compliant and efficient blockchain operations.',
      icon: icons.bank
    },
    {
      id: 2,
      title: 'Cross-Border Payments',
      description: 'Fast, low-cost international transfers with built-in compliance and regulatory adherence.',
      icon: icons.globe
    },
    {
      id: 3,
      title: 'Digital Asset Management',
      description: 'Securely manage and transfer digital assets with automatic compliance verification.',
      icon: icons.gem
    },
    {
      id: 4,
      title: 'Enterprise Financial Solutions',
      description: 'Enterprise-grade blockchain infrastructure for financial operations and record-keeping.',
      icon: icons.building
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FinLayer enables a new generation of compliant financial applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="bg-white p-6 rounded-xl shadow-md flex items-start">
              <div className="mr-4 text-primary flex-shrink-0">{useCase.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Interested in exploring how FinLayer can empower your financial solutions?
          </p>
          <button className="btn-primary">
            Explore Integration Options
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
