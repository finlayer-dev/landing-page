import React from 'react';

const CallToAction = () => {
  return (
    <section className="section gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build on FinLayer?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join the next generation of compliant financial applications powered by blockchain technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-semibold mb-2">For Developers</h3>
              <p className="text-white/80 mb-4">
                Access developer tools, SDKs, and documentation to start building
              </p>
              <button className="w-full py-2 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-2">Financial Institutions</h3>
              <p className="text-white/80 mb-4">
                Learn how to integrate FinLayer into your existing financial systems
              </p>
              <button className="w-full py-2 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors">
                Contact Us
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-white/80 mb-4">
                Explore strategic partnerships and ecosystem opportunities
              </p>
              <button className="w-full py-2 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Have Questions?</h3>
            <form className="max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="p-3 rounded bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-white/70"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="p-3 rounded bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-white/70"
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full p-3 rounded bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-white/70 mb-4"
              ></textarea>
              <button 
                type="submit"
                className="px-6 py-3 bg-white text-primary font-semibold rounded hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
