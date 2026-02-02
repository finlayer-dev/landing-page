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
              <div className="mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">For Developers</h3>
              <p className="text-white/80 mb-4">
                Access developer tools, SDKs, and documentation to start building
              </p>
              <button className="w-full py-2 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Institutions</h3>
              <p className="text-white/80 mb-4">
                Learn how to integrate FinLayer into your existing financial systems
              </p>
              <button className="w-full py-2 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors">
                Contact Us
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
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
