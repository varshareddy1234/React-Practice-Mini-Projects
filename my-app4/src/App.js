import "./App.css";
import StepperCheckout from "./Stepper.js";
const Checkout_Steps = [
  {
    name: "Customer Details",
    Component: () => (
      <div>
        <h2>Enter Customer Details</h2>
        <div className="form-wrapper">
          <form className="form">
            <div>
              <label>
                Customer Name :
                <input type="text" name="username" />
              </label>
            </div>
            <div>
              <label>
                Customer Age :
                <input type="number" name="usernumber" />
              </label>
            </div>
            <div>
              <label>
                Customer Email :
                <input type="text" name="useremail" />
              </label>
            </div>
            <div>
              <label>
                Customer Gender :
                <input type="text" name="userdep" />
              </label>
            </div>
          </form>
        </div>
      </div>
    ),
  },
  {
    name: "Shipping details",
    Component: () => (
      <div>
        <h2>Enter Shipping Details</h2>
        <div className="form-wrapper">
          <form className="form">
            <div>
              <label>
                Landmark :
                <input type="text" name="username" />
              </label>
            </div>
            <div>
              <label>
                Door Num :
                <input type="number" name="usernumber" />
              </label>
            </div>
            <div>
              <label>
                Pincode :
                <input type="number" name="usernumber" />
              </label>
            </div>
            <div>
              <label>
                City/Address :
                <input type="text" name="userdep" />
              </label>
            </div>
          </form>
        </div>
      </div>
    ),
  },
  {
    name: "Payment",
    Component: () => (
      <div>
        <h2>Enter Shipping Details</h2>
        <div className="form-wrapper">
          <form className="form">
            <div>
              <label>
                Mode of Payment :
                <input type="text" name="username" />
              </label>
            </div>
          </form>
        </div>
      </div>
    ),
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered Successfully</div>,
  },
];

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>React Project</h1>
      </nav>
      <h1 className="App">Happyy Shopping!!!</h1>
      <StepperCheckout steps={Checkout_Steps} />
    </div>
  );
}

export default App;
