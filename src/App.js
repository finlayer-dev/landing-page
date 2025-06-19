import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TransactionSimulator from './components/TransactionSimulator';
import Features from './components/Features';
import Architecture from './components/Architecture';
import UseCases from './components/UseCases';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingLanguageSwitcher from './components/FloatingLanguageSwitcher';

function App() {
  return (
    <div className="App">
      <FloatingLanguageSwitcher />
      <Header />
      <Hero />
      <TransactionSimulator />
      <Features />
      <Architecture />
      <UseCases />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
