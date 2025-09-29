import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/Signup";
import { SignUpCustomer } from "./pages/SignupCustomer";
import { SignUpSeller } from "./pages/SignupSeller";
import { Restaurante } from "./pages/Restaurante";
import { Pickup } from "./pages/Pickup";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Seller */}

          <Route path="/signup/seller" element={<SignUpSeller />} />
          <Route path="/seller/analytics" />
          <Route path="/seller/offer" />
          <Route path="/seller/offer/createoffer" />
          <Route path="/seller/offer/editoffer/:offer" />
          <Route path="/seller/currentorders" />
          <Route path="/seller/orderinfo/:order" />
          <Route path="/seller/settings" />

          {/* Customer es el usario que va comprar  */}

          <Route path="/signup/customer" element={<SignUpCustomer />} />
          <Route path="/customer/home" element={<Home />} />
          <Route path="/customer/:restaurant" element={<Restaurante />} />
          <Route path="/customer/checkout" element={<Checkout />} />
          <Route path="/customer/:order/confirmation" />
          <Route path="/customer/:order/pickup" element={<Pickup />} />
          <Route path="/customer/history&savings" />
          <Route path="/customer/settings" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
