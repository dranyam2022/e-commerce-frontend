import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import MobilePhones from "./pages/MobilePhones";
import Tablets from "./pages/Tablets";
import Accessories from "./pages/Accesories";
import ContactUs from "./pages/ContactUs";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Switch>
      <Route path="/shopall" exact>
        <ShopAll />
      </Route>
      <Route path="/mobilephones" exact>
        <MobilePhones />
      </Route>
      <Route path="/tablets" exact>
        <Tablets />
      </Route>
      <Route path="/accessories" exact>
        <Accessories />
      </Route>
      <Route path="/contactus" exact>
        <ContactUs />
      </Route>
      <Route path="./shopall/:productId">
        <ProductDetails />
      </Route>
      <Route>
        <Home path="/home" exact />
      </Route>
      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default App;
