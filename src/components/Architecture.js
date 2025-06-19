import React from 'react';

const Architecture = () => {
  return (
    <section id="technology" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Architecture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FinLayer combines Layer 1 security with Layer 2 performance to create a compliant financial blockchain
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ArchitectureDiagram />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Key Components</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">User Frontend</h4>
                <p className="text-gray-700">
                  Web applications and wallet interfaces that connect to the L2 RPC endpoint through the Sequencer.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">Sequencer</h4>
                <p className="text-gray-700">
                  Acts as a gatekeeper for L2 transactions, ensuring all transactions comply with KYC/AML requirements.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">L2 Node</h4>
                <p className="text-gray-700">
                  Processes and executes validated transactions, maintaining the L2 blockchain state.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">Batcher & Prover</h4>
                <p className="text-gray-700">
                  Aggregates L2 transactions into batches and submits cryptographic proofs to L1 for verification.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-primary mb-2">L1 Smart Contracts</h4>
                <p className="text-gray-700">
                  Smart contracts deployed on Ethereum to store transaction commitments and verify state transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArchitectureDiagram = () => {
  return (
    <svg viewBox="0 0 500 400" className="w-full">
      {/* Background */}
      <rect width="500" height="400" fill="#f8fafc" rx="10" />
      
      {/* Layer 1 - Ethereum */}
      <rect x="50" y="50" width="400" height="80" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" rx="8" />
      <text x="250" y="85" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#065f46">Layer 1 - Ethereum</text>
      <text x="250" y="110" textAnchor="middle" fontSize="12" fill="#047857">Security & Data Availability</text>
      
      {/* Layer 2 - FinLayer */}
      <rect x="50" y="160" width="400" height="190" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <text x="250" y="185" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e40af">Layer 2 - FinLayer</text>
      <text x="250" y="210" textAnchor="middle" fontSize="12" fill="#1d4ed8">Performance & Compliance</text>
      
      {/* Layer 1 Components */}
      <rect x="100" y="60" width="120" height="40" fill="#fff" stroke="#10b981" strokeWidth="1" rx="4" />
      <text x="160" y="85" textAnchor="middle" fontSize="10" fill="#065f46">CTC Contract</text>
      
      <rect x="280" y="60" width="120" height="40" fill="#fff" stroke="#10b981" strokeWidth="1" rx="4" />
      <text x="340" y="85" textAnchor="middle" fontSize="10" fill="#065f46">SCC Contract</text>
      
      {/* Layer 2 Components */}
      <rect x="75" y="230" width="100" height="40" fill="#fff" stroke="#3b82f6" strokeWidth="1" rx="4" />
      <text x="125" y="255" textAnchor="middle" fontSize="10" fill="#1e40af">Sequencer</text>
      
      <rect x="200" y="230" width="100" height="40" fill="#fff" stroke="#3b82f6" strokeWidth="1" rx="4" />
      <text x="250" y="255" textAnchor="middle" fontSize="10" fill="#1e40af">L2 Node</text>
      
      <rect x="325" y="230" width="100" height="40" fill="#fff" stroke="#3b82f6" strokeWidth="1" rx="4" />
      <text x="375" y="255" textAnchor="middle" fontSize="10" fill="#1e40af">KYC Validator</text>
      
      <rect x="75" y="290" width="100" height="40" fill="#fff" stroke="#3b82f6" strokeWidth="1" rx="4" />
      <text x="125" y="315" textAnchor="middle" fontSize="10" fill="#1e40af">Batcher</text>
      
      <rect x="200" y="290" width="100" height="40" fill="#fff" stroke="#3b82f6" strokeWidth="1" rx="4" />
      <text x="250" y="315" textAnchor="middle" fontSize="10" fill="#1e40af">Prover</text>
      
      <rect x="325" y="290" width="100" height="40" fill="#fff" stroke="#3b82f6" strokeWidth="1" rx="4" />
      <text x="375" y="315" textAnchor="middle" fontSize="10" fill="#1e40af">DID Registry</text>
      
      {/* External Layer */}
      <rect x="50" y="370" width="400" height="60" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" rx="8" />
      <text x="250" y="405" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#b91c1c">Users & Applications</text>
      
      {/* Connections */}
      <line x1="125" y1="230" x2="125" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,2" />
      <line x1="250" y1="230" x2="250" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,2" />
      <line x1="375" y1="230" x2="375" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,2" />
      
      <line x1="125" y1="290" x2="125" y2="270" stroke="#3b82f6" strokeWidth="1" />
      <line x1="250" y1="290" x2="250" y2="270" stroke="#3b82f6" strokeWidth="1" />
      <line x1="375" y1="290" x2="375" y2="270" stroke="#3b82f6" strokeWidth="1" />
      
      <line x1="125" y1="150" x2="160" y2="100" stroke="#10b981" strokeWidth="1" />
      <line x1="250" y1="150" x2="250" y2="130" stroke="#10b981" strokeWidth="1" />
      <line x1="375" y1="150" x2="340" y2="100" stroke="#10b981" strokeWidth="1" />
      
      <line x1="250" y1="370" x2="250" y2="350" stroke="#ef4444" strokeWidth="1" />
    </svg>
  );
};

export default Architecture;
