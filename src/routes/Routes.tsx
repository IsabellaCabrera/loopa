import { Route, Routes } from "react-router";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/Signup";

export const AppRoutes = () => {

  // Lo que tenga dos puntos : es porque solo va a funcionar con la info de la pagina porque es dinamico

  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/selectmode" />
      <Route path="/signup/customer" element={<SignUp />} />
      <Route path="/signup/seller" element={<SignUp />} />

      {/* Seller */}

      <Route path="/seller/analytics" />
      <Route path="/seller/offer" />
      <Route path="/seller/offer/createoffer" />
      <Route path="/seller/offer/editoffer/:offer" />
      <Route path="/seller/currentorders" />
      <Route path="/seller/orderinfo/:order" />
      <Route path="/seller/settings" />

      {/* Customer */}
      <Route path="/customer/home" />
      <Route path="/customer/:restaurant" />
      <Route path="/customer/:order/checkout" />
      <Route path="/customer/:order/confirmation" />
      <Route path="/customer/:order/pickup" />
      <Route path="/customer/history&savings" />
      <Route path="/customer/settings" />

    </Routes>
  );
};
