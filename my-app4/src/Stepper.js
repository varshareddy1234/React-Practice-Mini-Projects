import React, { useState } from "react";

const StepperCheckout = ({ steps = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const hancleClick = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === steps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  const ActiveComponent = steps[currentStep - 1]?.Component;
  if (!steps.length) return <></>;
  return (
    <>
      <div className="stepper-checkout container">
        {steps.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`step
            ${currentStep > index + 1 || isComplete ? "complete" : ""}
            ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="item">
                <div className="step-number">
                  {currentStep > index + 1 || isComplete ? (
                    <span>&#10003;</span>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="step-name">
                  {step.name}
                  {/* <span class="arrow">›</span> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="content">
        <ActiveComponent />
      </div>
      {!isComplete && (
        <button className="btn" onClick={hancleClick}>
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};
export default StepperCheckout;
