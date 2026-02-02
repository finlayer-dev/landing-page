// setupRejectedAnimations.js - Tạo animation cho kịch bản từ chối giao dịch
const setupRejectedAnimations = () => {
  if (!timelineRef.current) return;
  
  // Reset timeline
  timelineRef.current.clear();
  
  // Define colors for different parts of the flow
  const userColor = "#3366cc";       // Blue for user
  const walletColor = "#ffaa00";     // Orange for wallet
  const proxyColor = "#00cc66";      // Green for Proxy RPC
  const amlColor = "#ff6600";        // Orange for AML/Risk API (third-party)
  const didValidatorColor = "#9966ff"; // Purple for DID Validator
  const errorColor = "#FF3B30";      // Red for error/rejection
  
  // Create animations for the rejection scenario
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
    // Step 3: Proxy to Third-party RiskScore/AML API - path where it will get rejected
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
    // Step 4: AML API detects high-risk transaction and rejects it
    .to("#transaction-packet-clone-1", { 
      duration: 0.3,
      scale: 1.2,
      backgroundColor: errorColor,
      boxShadow: "0 0 15px rgba(255, 59, 48, 0.8)",
      ease: "elastic.out(1, 0.5)",
      onStart: () => updateStepIfPlaying(3)
    })
    // Vibration effect to indicate rejection
    .to("#transaction-packet-clone-1", {
      duration: 0.1,
      x: "-=5",
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut"
    })
    // Step 5: Rejected transaction returns to Proxy with error status
    .to("#transaction-packet-clone-1", { 
      duration: 0.8,
      backgroundColor: errorColor,
      ease: "power1.inOut",
      motionPath: {
        path: "#aml-to-proxy-path",
        align: "#aml-to-proxy-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      onComplete: () => updateStepIfPlaying(4)
    })
    // Step 6: Proxy receives rejection and main packet turns red
    .to("#transaction-packet", { 
      duration: 0.3,
      scale: 1.3,
      backgroundColor: errorColor,
      boxShadow: "0 0 15px rgba(255, 59, 48, 0.8)",
      ease: "elastic.out(1, 0.5)",
      onComplete: () => updateStepIfPlaying(5)
    })
    // Transaction rejected clone fades out
    .to("#transaction-packet-clone-1", { 
      duration: 0.4,
      autoAlpha: 0,
      ease: "power1.inOut"
    })
    // Final rejection animation and show transaction rejected message
    .to("#transaction-packet", { 
      duration: 0.3,
      scale: 1.4,
      x: "+=10",
      repeat: 2,
      yoyo: true,
      ease: "power1.inOut",
      onComplete: () => {
        // Hiển thị thông báo giao dịch bị từ chối
        setShowTransactionRejected(true);
        
        // Pulsing effect cho packet
        gsap.to("#transaction-packet", { 
          duration: 0.7,
          scale: 1.4,
          ease: "elastic.out(1, 0.5)",
          repeat: 2,
          yoyo: true,
          backgroundColor: errorColor,
          boxShadow: "0 0 12px rgba(255, 59, 48, 0.8)",
          onComplete: () => {
            // Delay 3 giây rồi quay lại từ đầu
            setTimeout(() => {
              // Ẩn thông báo trước khi restart
              setShowTransactionRejected(false);
              
              // Quay lại từ đầu
              setCurrentStep(0);
              
              if (isPlaying && timelineRef.current) {
                timelineRef.current.restart();
              } else {
                // Nếu không phải đang phát, chỉ đặt lại trạng thái
                resetSimulationState();
              }
            }, 3000); // 3 giây delay
          }
        });
      }
    });
};
