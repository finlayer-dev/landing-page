import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'KYC/AML Compliance',
      description: 'Built-in compliance mechanisms ensure all transactions meet regulatory requirements',
      icon: '🛡️'
    },
    {
      id: 2,
      title: 'High Transaction Throughput',
      description: 'Process thousands of financial transactions per second with minimal latency',
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Low Gas Fees',
      description: 'Cost-effective Layer 2 solution dramatically reduces transaction costs',
      icon: '💰'
    },
    {
      id: 4,
      title: 'Ethereum Compatibility',
      description: 'Fully compatible with Ethereum standards and smart contracts',
      icon: '🔄'
    },
    {
      id: 5,
      title: 'Security & Reliability',
      description: 'Battle-tested infrastructure with cryptographic security guarantees',
      icon: '🔒'
    },
    {
      id: 6,
      title: 'Decentralized Identity',
      description: 'Integrated DID system for secure and verifiable digital identities',
      icon: '🪪'
    }
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FinLayer combines high-performance blockchain technology with built-in regulatory compliance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
