import { useState } from "react";
import "./App.css";
import StepperCheckout from "./Stepper";
const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    component: () => <div>Complete Payment for your order.</div>,
  },
  {
    name: "Delivered",
    component: () => <div>Your Order has been Delivered.</div>,
  },
];
function App() {
  return (
    <div>
      <h2 className="App">Checkout</h2>
      <StepperCheckout steps={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
