// updatePlayStep.js - Hàm điều khiển animation để xử lý cả 2 kịch bản
const playStep = () => {
  if (!timelineRef.current) return;
  
  // Ẩn các thông báo khi bắt đầu phát animation mới
  setShowTransactionSuccess(false);
  setShowTransactionRejected(false);
  
  // Set speed
  timelineRef.current.timeScale(speed);
  
  // Determine where to start in the timeline
  if (currentStep === 0) {
    timelineRef.current.restart();
  } else {
    // Go to the next step
    timelineRef.current.play();
  }
};
