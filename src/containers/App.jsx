import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";

// Redux
import appStore from "../store/appStore";
import { Provider } from "react-redux";
import { fetchPage, fetchEntry } from "../actions/appActions";

// Pages
import {
  About,
  Article,
  Contact,
  Doctor,
  Employee,
  Frontpage,
  NoMatch,
  Prices,
  Service,
  Training,
  Treatment,
  Treatments,
  MotherAndChild
} from "../pages";

const ReactGA = require("react-ga");
ReactGA.initialize("UA-96086129-1");

const store = appStore();

const onRouteUpdate = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  window.scrollTo(0, 0);
};

const handleOnEnterPage = (page, contentType) => {
  console.log(page, contentType);
  store.dispatch(fetchPage(page, contentType));
};

const handleOnEnterSingleItem = (e, entry) => {
  const state = store.getState();
  const id = e.params.id;

  if (!state.pages[state.activePage]) {
    store.dispatch(fetchEntry(entry, id));
  }

  store.dispatch({
    type: "SET_ACTIVE_ENTRY",
    id: id,
    solidMenu: true
  });
};

const handleOnLeaveSingleItem = () => {
  store.dispatch({
    type: "SET_ACTIVE_ENTRY",
    id: null
  });
};

const handleOnEnterTreatment = e => {
  if (!store.getState().pages.treatments) {
    store.dispatch(fetchPage("treatments", "sideBehandlingstilbud"));
  }

  store.dispatch({
    type: "SET_ACTIVE_ENTRY",
    id: e.params.id,
    solidMenu: true
  });
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} onUpdate={onRouteUpdate}>
          <Route
            component={Frontpage}
            onEnter={() => handleOnEnterPage("index", "pageIndex")}
            path="/"
          />
          <Route
            component={Treatments}
            onEnter={() =>
              handleOnEnterPage("treatments", "sideBehandlingstilbud")
            }
            path="/behandlinger"
          />
          <Route
            component={Doctor}
            onEnter={() => handleOnEnterPage("doctor", "pageDoctor")}
            path="/Legekontor"
          />
          <Route
            component={About}
            onEnter={() => handleOnEnterPage("about", "employees")}
            path="/om"
          />
          <Route
            component={Training}
            onEnter={() => handleOnEnterPage("training", "pageTraining")}
            path="/trening"
          />
          <Route
            component={MotherAndChild}
            onEnter={() =>
              handleOnEnterPage("motherAndChild", "pageMotherAndChild")
            }
            path="/morogbarn"
          />
          <Route
            component={Prices}
            onEnter={() => handleOnEnterPage("prices", "pagePrices")}
            path="/priser"
          />
          <Route
            component={Contact}
            onEnter={() => handleOnEnterPage("contact", "pageContact")}
            path="/kontakt"
          />
          <Route
            path="behandlinger/:id"
            component={Treatment}
            onEnter={handleOnEnterTreatment}
            onLeave={handleOnLeaveSingleItem}
          />
          <Route
            path="tjenester/:id"
            component={Service}
            onEnter={e => handleOnEnterSingleItem(e, "service")}
            onLeave={handleOnLeaveSingleItem}
          />
          <Route
            path="artikler/:id"
            component={Article}
            onEnter={e => handleOnEnterSingleItem(e, "article")}
            onLeave={handleOnLeaveSingleItem}
          />
          <Route
            path="ansatte/:id"
            component={Employee}
            onEnter={e => handleOnEnterSingleItem(e, "employee")}
            onLeave={handleOnLeaveSingleItem}
          />
          <Route
            path="*"
            component={Frontpage}
            onEnter={() => handleOnEnterPage("index", "pageIndex")}
          />
        </Router>
      </Provider>
    );
  }
}

export default App;
