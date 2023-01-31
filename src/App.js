import { Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import PickCompany from "./components/pages/PickCompany";
import CustomerTypePage from "./components/pages/CustomerTypePage";
import ProductsPage from "./components/pages/ProductsPage";
import Markentwicklung from "./components/pages/Markentwicklung";
import NamingProduct from "./components/pages/NamingProduct";
import OmnichannelKonzept from "./components/pages/OmnichannelKonzept";
import CorporateDesign from "./components/pages/CorporateDesign";
import BrandingKonzept from "./components/pages/BrandingKonzept";
import BasketOfGoods from "./components/pages/BasketOfGoods";
import ProductCart from "./components/pages/productCart";

function App() {
  return (
    <div>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/pick-a-company">
        <PickCompany />
      </Route>
      <Route path="/customer-types">
        <CustomerTypePage />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/markentwicklung">
        <Markentwicklung />
      </Route>
      <Route path="/naming">
        <NamingProduct />
      </Route>
      <Route path="/omnichannel-konzept">
        <OmnichannelKonzept />
      </Route>
      <Route path="/corporate-design">
        <CorporateDesign />
      </Route>
      <Route path="/employer-branding-konzept">
        <BrandingKonzept />
      </Route>
      <Route path="/basket">
        <BasketOfGoods/>
      </Route>
      <Route path="/productCart">
        <ProductCart/>
      </Route>
    </div>
  );
}

export default App;
