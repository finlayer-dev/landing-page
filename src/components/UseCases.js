import React from 'react';

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      title: 'Financial Institution Integration',
      description: 'Banks and financial institutions can leverage FinLayer for compliant and efficient blockchain operations.',
      icon: '🏦'
    },
    {
      id: 2,
      title: 'Cross-Border Payments',
      description: 'Fast, low-cost international transfers with built-in compliance and regulatory adherence.',
      icon: '🌍'
    },
    {
      id: 3,
      title: 'Digital Asset Management',
      description: 'Securely manage and transfer digital assets with automatic compliance verification.',
      icon: '💎'
    },
    {
      id: 4,
      title: 'Enterprise Financial Solutions',
      description: 'Enterprise-grade blockchain infrastructure for financial operations and record-keeping.',
      icon: '🏢'
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
              <div className="text-4xl mr-4">{useCase.icon}</div>
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
