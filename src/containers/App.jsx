import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Redux
import appStore from '../store/appStore';
import { Provider } from 'react-redux';
import { sendMail, fetchPage, fetchEntry, fetchTest, fetchTreatment, fetchPageAbout, fetchPageTreatments, fetchEmployees, setActiveTreatment, setActiveService } from '../actions/appActions';

// Containers
import Index from '../containers/Index';
import About from '../containers/About';
import Treatments from '../containers/Treatments';
import Treatment from '../containers/Treatment';
import Training from '../containers/Training';
import Contact from '../containers/Contact';
import Service from '../containers/Service';
import Article from '../containers/Article';
import Employee from '../containers/Article';

const store = appStore();

const handleOnEnterIndex = () => {
    // store.dispatch({
    //     type: 'SET_PAGE',
    //     id: 'pageIndex'
    // })
    //if(Object.keys(store.getState().pageIndex).length === 0 && store.getState().pageIndex.constructor === Object) {
        store.dispatch(fetchPage('index', 'pageIndex'));
        //store.dispatch(fetchTest());
        store.dispatch(sendMail());
    //}
}

const handleOnEnterAbout = () => {
    // store.dispatch({
    //     type: 'SET_PAGE',
    //     id: 'pageAbout'
    // })
    // if(Object.keys(store.getState().pageAbout).length === 0 && store.getState().pageAbout.constructor === Object) {
    //     store.dispatch(fetchPageAbout());
    // }
    // if(Object.keys(store.getState().employees).length === 0 && store.getState().employees.constructor === Object) {
    //     store.dispatch(fetchEmployees());
    // }


    store.dispatch(fetchPage('about', 'employees'));
}

const handleOnEnterTreatments = () => {
    // store.dispatch({
    //     type: 'SET_PAGE',
    //     id: 'pageTreatments'
    // })
    // if(Object.keys(store.getState().pageTreatments).length === 0 && store.getState().pageTreatments.constructor === Object) {
    //     store.dispatch(fetchPageTreatments());
    // }
    // if(Object.keys(store.getState().employees).length === 0 && store.getState().employees.constructor === Object) {
    //     store.dispatch(fetchEmployees());
    // }
    store.dispatch(fetchPage('treatments', 'sideBehandlingstilbud'));
}

const handleOnEnterTreatment = (e) => {
    // if(Object.keys(store.getState().pageTreatment).length === 0 && store.getState().pageTreatment.constructor === Object) {
    //     store.dispatch(fetchPageTreatment());
    // }
    // store.dispatch(fetchTreatments());
    // store.dispatch(fetchEmployees());
    // if(Object.keys(store.getState().pageTreatments).length === 0 && store.getState().pageTreatments.constructor === Object) {
    //     store.dispatch(fetchPageTreatments());
    //     store.dispatch(fetchEmployees());
    // }
    //store.dispatch(fetchPage('treatments', 'sideBehandlingstilbud'));
    //store.dispatch(fetchTreatment(e.params.id));
    //store.dispatch(setActiveTreatment(e.params.key));

    if(!store.getState().pages.treatments) {
        store.dispatch(fetchPage('treatments', 'sideBehandlingstilbud'));
    }
    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: e.params.id
    });
    //store.dispatch(fetchEmployees());
}

const handleOnLeaveTreatment = () => {
    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: null
    });
}

const handleOnEnterService = (e) => {
    store.dispatch({
        type: 'SET_PAGE',
        id: 'pageTreatments'
    })
    if(Object.keys(store.getState().pageTreatments).length === 0 && store.getState().pageTreatments.constructor === Object) {
        store.dispatch(fetchPageTreatments());
    }
    store.dispatch(setActiveService(e.params.slug));
    // if(!store.getState().services) {
    //     store.dispatch(fetchTreatments());
    //     store.dispatch(setActiveService(e.params.slug));
    // }
}

const handleOnLeaveService = () => {
    store.dispatch(setActiveService(null));
}

const handleOnEnterTraining = (e) => {
    store.dispatch(fetchPage('training', 'pageTraining'));
}

const handleOnEnterArticle = (e) => {
    const state = store.getState();
    const id = e.params.id;

    if(!state.pages[state.activePage]) {
        store.dispatch(fetchEntry(id));
    }

    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: id
    });
}

const handleOnLeaveArticle = () => {
    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: null
    });
}

const handleOnEnterEmployee = (e) => {
    const state = store.getState();
    const id = e.params.id;

    if(!state.pages[state.activePage]) {
        store.dispatch(fetchEntry(id));
    }

    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: id
    });
}

const handleOnLeaveEmployee = () => {
    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: null
    });
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
                    <Route
                        component={Index}
                        onEnter={handleOnEnterIndex}
                        path="/"
                    />
                    <Route
                        component={Treatments}
                        onEnter={handleOnEnterTreatments}
                        path="/behandlinger"
                    />
                    <Route
                        path="behandlinger/:id"
                        component={Treatment}
                        onEnter={handleOnEnterTreatment}
                        onLeave={handleOnLeaveTreatment}
                    />
                    <Route
                        path="tjenester/:slug"
                        component={Service}
                        onEnter={handleOnEnterService}
                        onLeave={handleOnLeaveService}
                    />
                    <Route
                        component={About}
                        onEnter={handleOnEnterAbout}
                        path="/om"
                    />
                    <Route
                        component={Training}
                        onEnter={handleOnEnterTraining}
                        path="/trening"
                    />
                    <Route
                        component={Contact}
                        path="/kontakt"
                    />
                    <Route
                        path="artikler/:id"
                        component={Article}
                        onEnter={handleOnEnterArticle}
                        onLeave={handleOnLeaveArticle}
                    />
                    <Route
                        path="ansatte/:id"
                        component={Employee}
                        onEnter={handleOnEnterEmployee}
                        onLeave={handleOnLeaveEmployee}
                    />
                </Router>
            </Provider>
        );
    }
}

export default App;
