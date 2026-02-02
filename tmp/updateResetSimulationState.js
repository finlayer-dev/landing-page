// updateResetSimulationState.js - Reset both success and rejected scenarios
const resetSimulationState = () => {
  setCurrentStep(0);
  setShowDetails(null);
  setShowTransactionSuccess(false);
  setShowTransactionRejected(false);
  
  if (timelineRef.current) {
    // Đặt lại timeline và đặt node gói tin về vị trí ban đầu
    timelineRef.current.seek(0);
    timelineRef.current.clear();
    
    // Đặt lại vị trí và thuộc tính của node gói tin
    gsap.set("#transaction-packet", { 
      attr: { cx: positions[0].x, cy: positions[0].y },
      scale: 1,
      backgroundColor: "#3366cc",
      boxShadow: "0 0 5px rgba(51, 102, 204, 0.5)",
      x: 0 // Reset any x-position changes from animations
    });
    
    // Đặt lại packet clones
    gsap.set(["#transaction-packet-clone-1", "#transaction-packet-clone-2"], {
      autoAlpha: 0,
      attr: { cx: positions[2].x, cy: positions[2].y },
      x: 0 // Reset any x-position changes
    });
    
    // Thiết lập lại animations based on the current scenario type
    if (scenarioType === 'success') {
      setupAnimations();
    } else if (scenarioType === 'rejected') {
      setupRejectedAnimations();
    }
  }
};
