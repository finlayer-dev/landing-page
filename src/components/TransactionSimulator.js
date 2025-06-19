import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './TransactionSimulator.css';
import { useLanguage } from '../context/LanguageContext';
import siteTranslations from '../translations/index';

const TransactionSimulator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(0.7); // hoặc 0.5 cho chậm hơn
  const [showDetails, setShowDetails] = useState(null);
  const { language } = useLanguage(); // Use the language from context
  const simulationRef = useRef(null);
  const timelineRef = useRef(null);
  const stepsSidebarRef = useRef(null);

  // Use site-wide translations
  const translations = {
    vi: siteTranslations.vi.transactionSimulator,
    en: siteTranslations.en.transactionSimulator
  };
  
  // Get the appropriate steps based on the selected language from site-wide translations
  const steps = translations[language].steps || [];

  // Đảm bảo khai báo positions ở đầu component hoặc trước phần render SVG
  const SCALE = 1.33;
  const MAIN_FLOW_Y = 110 * SCALE;
  const positions = [
    { x: 90, y: 110 },
    { x: 180, y: 110 },
    { x: 270, y: 110 },
    { x: 310, y: 40 * SCALE },
    { x: 270, y: 180 * SCALE },
    { x: 450, y: 110 },
    { x: 555, y: 110 },
    { x: 635, y: 110 }
  ];

  useEffect(() => {
    // Initialize GSAP timeline
    timelineRef.current = gsap.timeline({ paused: true });
    
    // Setup animations
    setupAnimations();
    
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);
  
  useEffect(() => {
    // Control timeline based on play state
    if (isPlaying) {
      playStep();
    } else {
      if (timelineRef.current) {
        timelineRef.current.pause();
      }
    }
  }, [isPlaying, currentStep, speed]);

  // Auto-scroll steps sidebar when current step changes
  useEffect(() => {
    if (stepsSidebarRef.current) {
      const active = stepsSidebarRef.current.querySelector('.bg-primary');
      if (active) {
        active.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [currentStep]);

  // Handle showing details popup
  const toggleDetails = (stepId) => {
    if (showDetails === stepId) {
      setShowDetails(null);
    } else {
      setShowDetails(stepId);
    }
  };
  
  const setupAnimations = () => {
    if (!timelineRef.current) return;
    
    // Reset timeline
    timelineRef.current.clear();
    
    // Define colors for different parts of the flow
    const userColor = "#3366cc";       // Blue for user
    const walletColor = "#ffaa00";     // Orange for wallet
    const proxyColor = "#00cc66";      // Green for Proxy RPC
    const amlColor = "#ff6600";        // Orange for AML/Risk API (third-party)
    const didValidatorColor = "#9966ff"; // Purple for DID Validator
    const l2Color = "#00aaff";         // Light blue for L2 Geth
    const contractColor = "#ff66cc";   // Pink for Smart Contracts
    const l1Color = "#404040";         // Dark gray for L1
    
    // Create animations for each step in the flow
    timelineRef.current
      // Step 1: User to Wallet
      .set("#transaction-packet", { attr: { cx: positions[0].x, cy: positions[0].y }, backgroundColor: userColor, scale: 1, opacity: 1 })
      .to("#transaction-packet", { 
        duration: 0.8, 
        attr: { cx: positions[1].x, cy: positions[1].y },
        backgroundColor: walletColor, 
        ease: "power1.inOut",
        onStart: () => updateStepIfPlaying(0),
        onComplete: () => updateStepIfPlaying(0)
      })
      // Step 2: Wallet to Proxy RPC
      .to("#transaction-packet", { 
        duration: 0.8, 
        attr: { cx: positions[2].x, cy: positions[2].y },
        backgroundColor: proxyColor, 
        ease: "power1.inOut",
        onStart: () => updateStepIfPlaying(1),
        onComplete: () => updateStepIfPlaying(1) 
      })
      // Step 3: Proxy to Third-party RiskScore/AML API - using exact same path as the visual guide
      .to("#transaction-packet-clone-1", { 
        duration: 0.8,
        backgroundColor: amlColor,
        autoAlpha: 1,
        scale: 0.8,
        ease: "power2.out",
        motionPath: {
          path: "#proxy-to-aml-path",
          align: "#proxy-to-aml-path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        onStart: () => updateStepIfPlaying(2),
        onComplete: () => updateStepIfPlaying(2)
      })
      // Step 4: Proxy to DID Validator - using exact path as the visual guide
      .to("#transaction-packet-clone-2", { 
        duration: 0.6,
        backgroundColor: didValidatorColor,
        autoAlpha: 1, 
        scale: 0.8,
        ease: "power1.inOut",
        motionPath: {
          path: "#proxy-to-did-path",
          align: "#proxy-to-did-path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        onStart: () => updateStepIfPlaying(3),
        onComplete: () => updateStepIfPlaying(3)
      })      // Step 5: Clone packets return to Proxy - using exact same path as the visual guide
      .to("#transaction-packet-clone-1", { 
        duration: 0.8,
        backgroundColor: amlColor,
        ease: "power1.inOut",
        motionPath: {
          path: "#aml-to-proxy-path",
          align: "#aml-to-proxy-path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        }
        })
      .to("#transaction-packet-clone-2", { 
        duration: 0.6,
        backgroundColor: didValidatorColor,
        ease: "power1.inOut",
        motionPath: {
          path: "#did-to-proxy-path",
          align: "#did-to-proxy-path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        onStart: () => updateStepIfPlaying(4),
        onComplete: () => updateStepIfPlaying(4)
      })
      // Step 5: Proxy clones fade out and main packet goes directly to L2 Geth
      .to(["#transaction-packet-clone-1", "#transaction-packet-clone-2"], { 
        duration: 0.4,
        autoAlpha: 0,
        ease: "power1.inOut"
      })
      // Step 6: Proxy forwards to L2 Geth
      .to("#transaction-packet", { 
        duration: 0.8, 
        attr: { cx: positions[5].x, cy: positions[5].y },
        backgroundColor: l2Color, 
        ease: "power1.inOut",
        onStart: () => updateStepIfPlaying(5),
        onComplete: () => updateStepIfPlaying(5)
      })
      // Step 7: L2 Geth execution with improved pulsing effect
      .to("#transaction-packet", { 
        duration: 0.6,
        attr: { cx: positions[5].x, cy: positions[5].y }, 
        scale: 1.3,
        backgroundColor: l2Color,
        boxShadow: "0 0 15px rgba(0, 170, 255, 0.8)",
        ease: "elastic.out(1, 0.5)",
        onStart: () => updateStepIfPlaying(6),
        onComplete: () => updateStepIfPlaying(6)
      })
      .to("#transaction-packet", { 
        duration: 0.5,
        scale: 0.9,
        boxShadow: "0 0 10px rgba(0, 170, 255, 0.7)",
        ease: "power1.inOut"
      })
      .to("#transaction-packet", { 
        duration: 0.3,
        scale: 1,
        boxShadow: "0 0 5px rgba(0, 170, 255, 0.5)",
        ease: "power2.inOut"
      })
      // Step 8: L2 Geth to Smart Contracts
      .to("#transaction-packet", { 
        duration: 0.8, 
        attr: { cx: positions[6].x, cy: positions[6].y },
        backgroundColor: contractColor, 
        boxShadow: "0 0 5px rgba(255, 102, 204, 0.5)",
        ease: "power1.inOut",
        onStart: () => updateStepIfPlaying(7),
        onComplete: () => updateStepIfPlaying(7)
      })
      // Step 9: Smart Contracts to Ethereum L1
      .to("#transaction-packet", { 
        duration: 0.8, 
        attr: { cx: positions[7].x, cy: positions[7].y },
        backgroundColor: l1Color, 
        boxShadow: "0 0 5px rgba(64, 64, 64, 0.5)",
        ease: "power1.inOut",
        onStart: () => updateStepIfPlaying(8),
        onComplete: () => updateStepIfPlaying(8)
      });
  };
  
  const updateStepIfPlaying = (step) => {
    if (isPlaying) {
      setCurrentStep(step);
      setShowDetails(null); // Close any open details when advancing steps
    }
  };
  
  const playStep = () => {
    if (!timelineRef.current) return;
    
    // Set speed
    timelineRef.current.timeScale(speed);
    
    // Determine where to start in the timeline
    if (currentStep === 0) {
      timelineRef.current.restart();
    } else if (currentStep >= steps.length - 1) {
      // If at the end, restart
      setCurrentStep(0);
      timelineRef.current.restart();
    } else {
      // Go to the next step
      timelineRef.current.play();
    }
  };
  
  const startSimulation = () => {
    setIsPlaying(true);
    setShowDetails(null); // Close details popup when playing
  };
  
  const pauseSimulation = () => {
    setIsPlaying(false);
  };
  
  const resetSimulation = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setShowDetails(null);
    if (timelineRef.current) {
      timelineRef.current.seek(0);
    }
  };
  
  const goToStep = (stepIndex) => {
    setIsPlaying(false);
    setCurrentStep(stepIndex);
    setShowDetails(null);
    
    if (timelineRef.current) {
      // Calculate the position in the timeline
      const stepDuration = 0.8; // each step is roughly 0.8 second
      const timePosition = stepIndex * stepDuration;
      timelineRef.current.seek(timePosition);
    }
  };
  
  return (
    <section id="transaction-simulator" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{translations[language].title}</h2>
          <p className="text-xl text-gray-600">
            {translations[language].subtitle}
          </p>
          <p className="text-md text-gray-500 mt-2">
            {translations[language].description}
          </p>
        </div>
        
        <div ref={simulationRef} className="simulator-container">
          {/* Layout chính */}
          <div className="flex flex-col lg:flex-row">
            {/* Bên trái: mô hình + controls */}
            <div className="lg:w-3/4 mb-6 lg:mb-0">
              <div className="bg-white p-4 rounded-lg shadow-inner relative">
                <div className="flex flex-col items-center">
                  <div className="w-full">
                    <svg viewBox="0 0 960 320" className="h-[400px] w-auto mx-auto block" preserveAspectRatio="xMidYMid meet">
                      {/* Background grid */}
                      <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="0.5"/>
                        </pattern>
                        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                          <rect width="100" height="100" fill="url(#smallGrid)"/>
                          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(0, 0, 0, 0.1)" strokeWidth="1"/>
                        </pattern>
                        
                        {/* Glow effect for packets */}
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
                          <feBlend in="SourceGraphic" in2="glow" mode="normal" />
                        </filter>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Layer separation */}
                      <rect x="510" y="20" width="5" height="280" fill="#f0f0f0" stroke="#ddd" strokeWidth="1" rx="2" />
                      <text x="500" y="15" textAnchor="end" fill="#777" fontSize="12" fontWeight="bold" fontStyle="italic">Layer 2</text>
                      <text x="530" y="15" textAnchor="start" fill="#777" fontSize="12" fontWeight="bold" fontStyle="italic">Layer 1</text>
                      
                      {/* Background shading for sections */}
                      <rect x="400" y="20" width="110" height="280" fill="#eef9ff" fillOpacity="0.5" rx="5" />
                      <rect x="520" y="20" width="180" height="280" fill="#f9f9f9" fillOpacity="0.5" rx="5" />
                      <rect x="200" y="20" width="190" height="280" fill="#f0fff5" fillOpacity="0.4" rx="5" />
                      
                      {/* Connection lines */}
                      {/* User to Wallet */}
                      <line x1="90" y1="110" x2="180" y2="110" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                      {/* Wallet to Proxy */}
                      <line x1="180" y1="110" x2="270" y2="110" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                      {/* Proxy to Third-party RiskScore/AML API - perfectly matching the animation path */}
                      <path d="M270,110 Q282,85 310,40" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" fill="none" id="proxy-to-aml-path" />
                      <path d="M310,40 Q282,85 270,110" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" fill="none" id="aml-to-proxy-path" />
                      {/* Proxy to DIDValidator */}
                      <line x1="270" y1="110" x2="270" y2="180" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" id="proxy-to-did-path" />
                      {/* DIDValidator to Proxy */}
                      <line x1="270" y1="180" x2="270" y2="110" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" id="did-to-proxy-path" />
                      {/* Proxy directly to L2 Geth */}
                      <line x1="270" y1="110" x2="450" y2="110" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                      {/* L2 Geth to Smart Contracts */}
                      <line x1="450" y1="110" x2="555" y2="110" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                      {/* Smart Contracts to L1 */}
                      <line x1="555" y1="110" x2="635" y2="110" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" />
                      
                      {/* Component nodes */}
                      {/* User - exactly centered at position[0] (90,110) */}
                      <g 
                        className="transaction-node cursor-pointer" 
                        opacity={currentStep >= 0 ? 1 : 0.5}
                        onClick={() => toggleDetails(0)}
                      >
                        <circle cx="90" cy="110" r="30" fill={currentStep === 0 ? "#3366cc" : "#eee"} />
                        <text x="90" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Người dùng</text>
                        <text x="90" y="120" textAnchor="middle" fill="white" fontSize="10">(Citizen)</text>
                        {currentStep === 0 && (
                          <circle cx="90" cy="110" r="35" fill="none" stroke="#3366cc" strokeWidth="2" strokeDasharray="5,2">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                          </circle>
                        )}
                      </g>
                      
                      {/* Wallet - exactly centered at position[1] (180,110) */}
                      <g 
                        className="transaction-node cursor-pointer" 
                        opacity={currentStep >= 1 ? 1 : 0.5}
                        onClick={() => toggleDetails(1)}
                      >
                        <rect x="150" y="80" width="60" height="60" rx="5" fill={currentStep === 1 ? "#ffaa00" : "#eee"} />
                        <text x="180" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Ví</text>
                        <text x="180" y="120" textAnchor="middle" fill="white" fontSize="10">(Wallet)</text>
                        {currentStep === 1 && (
                          <rect x="145" y="75" width="70" height="70" rx="5" fill="none" stroke="#ffaa00" strokeWidth="2" strokeDasharray="5,2">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                          </rect>
                        )}
                      </g>
                      
                      {/* Proxy RPC - exactly centered at position[2] (270,110) */}
                      <g 
                        className="transaction-node cursor-pointer" 
                        opacity={currentStep >= 2 ? 1 : 0.5}
                        onClick={() => toggleDetails(2)}
                      >
                        <rect x="240" y="80" width="60" height="60" rx="5" fill={currentStep === 2 || currentStep === 5 ? "#00cc66" : "#eee"} />
                        <text x="270" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Proxy</text>
                        <text x="270" y="120" textAnchor="middle" fill="white" fontSize="10">RPC</text>
                        {(currentStep === 2 || currentStep === 5) && (
                          <rect x="235" y="75" width="70" height="70" rx="5" fill="none" stroke="#00cc66" strokeWidth="2" strokeDasharray="5,2">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                          </rect>
                        )}
                      </g>
                      
                      {/* Risk/AML Service */}
                      <g 
                        className="transaction-node cursor-pointer" 
                        opacity={currentStep >= 3 ? 1 : 0.5}
                        onClick={() => toggleDetails(3)}
                      >
                        {/* Cloud shape to represent third-party service - perfectly centered at position[3] (310,40) */}
                        <path d="M270,10 
                                 C290,10 300,15 310,25 
                                 C320,15 335,15 345,20 
                                 C355,5 375,10 380,25 
                                 C390,20 400,25 400,40 
                                 C400,55 390,65 380,65 
                                 C385,75 375,80 365,75 
                                 C355,85 335,85 325,75 
                                 C315,80 300,75 295,65 
                                 C280,75 255,70 250,60 
                                 C235,65 220,55 220,40 
                                 C220,25 235,15 250,20 
                                 C255,15 260,10 270,10" 
                              fill={currentStep === 3 ? "#ff6600" : "#eee"} />
                        <text x="310" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Third-Party</text>
                        <text x="310" y="50" textAnchor="middle" fill="white" fontSize="11">RiskScore + AML</text>
                        <text x="310" y="65" textAnchor="middle" fill="white" fontSize="9" fontStyle="italic">(off-chain compliance service)</text>
                        {currentStep === 3 && (
                          <path d="M270,5 
                                   C290,5 305,10 315,20 
                                   C325,10 340,10 350,15 
                                   C360,0 380,5 385,20 
                                   C395,15 405,20 405,35 
                                   C405,50 395,60 385,60 
                                   C390,70 380,75 370,70 
                                   C360,80 340,80 330,70 
                                   C320,75 305,70 300,60 
                                   C285,70 260,65 255,55 
                                   C240,60 215,50 215,35 
                                   C215,20 230,10 245,15 
                                   C250,10 255,5 270,5"
                                fill="none" stroke="#ff6600" strokeWidth="2" strokeDasharray="5,2">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                          </path>
                        )}
                        {/* External service indication */}
                        <circle cx="385" cy="30" r="12" fill="#ffffff" stroke="#ff6600" strokeWidth="1" />
                        <text x="385" y="33" textAnchor="middle" fill="#ff6600" fontSize="9" fontWeight="bold">3rd</text>
                      </g>
                      
                      {/* DID Validator - exactly centered at position[4] (270,180) */}
                      <g 
                        className="transaction-node cursor-pointer" 
                        opacity={currentStep >= 4 ? 1 : 0.5}
                        onClick={() => toggleDetails(4)}
                      >
                        <rect x="230" y="150" width="80" height="60" rx="5" fill={currentStep === 4 ? "#9966ff" : "#eee"} />
                        <text x="270" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DIDValidator</text>
                        <text x="270" y="190" textAnchor="middle" fill="white" fontSize="10">(on-chain)</text>
                        {currentStep === 4 && (
                          <rect x="225" y="145" width="90" height="70" rx="5" fill="none" stroke="#9966ff" strokeWidth="2" strokeDasharray="5,2">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                          </rect>
                        )}
                      </g>
                      

                      {/* L2 Geth - exactly centered at position[5] (450,110) */}
                      <g 
                        className="transaction-node cursor-pointer" 
                        opacity={currentStep >= 5 ? 1 : 0.5}
                        onClick={() => toggleDetails(5)}
                      >
                        <rect x="420" y="80" width="60" height="60" rx="5" fill={currentStep === 5 || currentStep === 6 ? "#00aaff" : "#eee"} />
                        <text x="450" y="100" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L2 Geth</text>
                        <text x="450" y="120" textAnchor="middle" fill="white" fontSize="10">Node</text>
                        {(currentStep === 5 || currentStep === 6) && (
                          <rect x="415" y="75" width="70" height="70" rx="5" fill="none" stroke="#00aaff" strokeWidth="2" strokeDasharray="5,2">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                          </rect>
                        )}
                      </g>
                      
                      {/* Smart Contracts - exactly centered at position[6] (555,110) */}
                      <g 
                        className="transaction-node cursor-pointer" 
                        opacity={currentStep >= 7 ? 1 : 0.5}
                        onClick={() => toggleDetails(7)}
                      >
                        <rect x="520" y="70" width="70" height="80" rx="5" fill={currentStep === 7 ? "#ff66cc" : "#eee"} />
                        <text x="555" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CTC &</text>
                        <text x="555" y="115" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SCC</text>
                        <text x="555" y="135" textAnchor="middle" fill="white" fontSize="9">Smart Contracts</text>
                        {currentStep === 7 && (
                          <rect x="515" y="65" width="80" height="90" rx="5" fill="none" stroke="#ff66cc" strokeWidth="2" strokeDasharray="5,2">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                          </rect>
                        )}
                      </g>
                      
                      {/* Ethereum L1 - exactly centered at position[8] (635,110) */}
                      <g 
                        className="transaction-node cursor-pointer" 
                        opacity={currentStep >= 9 ? 1 : 0.5}
                        onClick={() => toggleDetails(9)}
                      >
                        <rect x="600" y="70" width="70" height="80" rx="5" fill={currentStep === 9 ? "#404040" : "#eee"} />
                        <text x="635" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Ethereum</text>
                        <text x="635" y="115" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">L1</text>
                        <text x="635" y="135" textAnchor="middle" fill="white" fontSize="9">Testnet</text>
                        {currentStep === 9 && (
                          <rect x="595" y="65" width="80" height="90" rx="5" fill="none" stroke="#404040" strokeWidth="2" strokeDasharray="5,2">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                          </rect>
                        )}
                      </g>
                      
                      {/* Center alignment reference lines have been removed for production */}
                      
                      {/* Transaction packets - initial positions match the first node exactly */}
                      <circle id="transaction-packet" cx={positions[0].x} cy={positions[0].y} r="8" fill="#3366cc" className="transaction-packet" filter="url(#glow)">
                        <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Clone packets for parallel operations - initial positions match the Proxy node exactly */}
                      <circle id="transaction-packet-clone-1" cx={positions[2].x} cy={positions[2].y} r="6" fill="#3366cc" opacity="0" filter="url(#glow)" />
                      <circle id="transaction-packet-clone-2" cx={positions[2].x} cy={positions[2].y} r="6" fill="#3366cc" opacity="0" filter="url(#glow)" />
                      
                      {/* Labels for diagram sections */}
                      <rect x="50" y="295" width="130" height="20" rx="4" fill="#f7f7f7" fillOpacity="0.8" />
                      <rect x="280" y="295" width="160" height="20" rx="4" fill="#f7f7f7" fillOpacity="0.8" />
                      <rect x="450" y="295" width="60" height="20" rx="4" fill="#f7f7f7" fillOpacity="0.8" />
                      <rect x="530" y="295" width="130" height="20" rx="4" fill="#f7f7f7" fillOpacity="0.8" />
                      
                      <text x="115" y="308" textAnchor="middle" fill="#666" fontSize="11" fontWeight="bold" fontStyle="italic">User Interface</text>
                      <text x="360" y="308" textAnchor="middle" fill="#666" fontSize="11" fontWeight="bold" fontStyle="italic">Regulatory Compliance</text>
                      <text x="480" y="308" textAnchor="middle" fill="#666" fontSize="11" fontWeight="bold" fontStyle="italic">L2 Execution</text>
                      <text x="595" y="308" textAnchor="middle" fill="#666" fontSize="11" fontWeight="bold" fontStyle="italic">Security & Finality</text>
                    </svg>
                  </div>
                  
                  {/* Controls */}
                  <div className="w-full mt-4">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {isPlaying ? (
                          <button 
                            onClick={pauseSimulation} 
                            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {translations[language].controls.pause}
                          </button>
                        ) : (
                          <button 
                            onClick={startSimulation} 
                            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            {translations[language].controls.play}
                          </button>
                        )}
                        <button 
                          onClick={resetSimulation} 
                          className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all shadow-sm hover:shadow flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                          </svg>
                          {translations[language].controls.reset}
                        </button>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2 text-gray-700 font-medium">{translations[language].controls.speed}:</span>
                        <select 
                          value={speed}
                          onChange={(e) => setSpeed(parseFloat(e.target.value))}
                          className="px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-500 focus:outline-none transition-all"
                        >
                          <option value="0.5">0.5x</option>
                          <option value="1">1x</option>
                          <option value="2">2x</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-3 text-center text-sm text-gray-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {translations[language].nodeHelp}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bên phải: Transaction Steps */}
            <div className="lg:w-1/4 lg:pl-6">
              <div className="bg-white p-5 rounded-lg shadow h-full flex flex-col items-start justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500"></div>
                <h3 className="text-xl font-semibold mb-4">{translations[language].currentStep}</h3>
                <div className="flex items-center mb-3 w-full">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full text-white font-bold mr-3">
                    {currentStep + 1}
                  </div>
                  <div className="text-lg text-primary font-bold">{steps[currentStep].name}</div>
                </div>
                <div className="w-full p-3 bg-gray-50 rounded-lg mb-3 border-l-4 border-primary">
                  <div className="font-medium text-gray-800">{steps[currentStep].description}</div>
                </div>
                <div className="text-gray-600 text-sm leading-relaxed">
                  {steps[currentStep].details}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 w-full flex justify-between text-sm">
                  <div className="text-gray-500">{translations[language].stepOf.replace('{current}', currentStep + 1).replace('{total}', steps.length)}</div>
                  {currentStep < steps.length - 1 && (
                    <div className="text-primary">{translations[language].next}: {steps[currentStep + 1].name}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionSimulator;
