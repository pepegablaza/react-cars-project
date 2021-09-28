import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/index.css";
import { syncHistoryWithStore } from "@superwf/mobx-react-router";
import { createBrowserHistory } from "history";

import routingStore from "./store/RouterStore";
import { store } from "./store/CarsStore";
import { brandsStore } from "./store/BrandsStore";
import { ui } from "./store/uiStore";

import CreateBrand from "./pages/brand/CreateBrand";
import SearchBrands from "./pages/brand/SearchBrands";
import Home from "./pages/Home";
import Create from "./pages/car/Create";
import Search from "./pages/car/Search";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import CarDetails from "./pages/car/CarDetails";
import BrandDetails from "./pages/brand/BrandDetails";

export const StoreContext = React.createContext();

const props = {
  store,
  brandsStore,
  ui,
  routingStore,
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, props.routingStore);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={props}>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searchCars" component={Search} />
          <Route exact path="/searchBrands" component={SearchBrands} />
          <Route exact path="/createCar" component={Create} />
          <Route exact path="/createBrand" component={CreateBrand} />
          <Route exact path="/cars/:id" component={CarDetails} />
          <Route exact path="/brands/:id" component={BrandDetails} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
