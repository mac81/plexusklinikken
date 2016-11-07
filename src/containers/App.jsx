import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-86523189-1');

// Redux
import appStore from '../store/appStore';
import { Provider } from 'react-redux';
import { sendMail, fetchPage, fetchEntry, fetchTest, fetchTreatment, fetchPageAbout, fetchPageTreatments, fetchEmployees, setActiveTreatment, setActiveService } from '../actions/appActions';

// Pages
import { About, Contact, Frontpage, Training, Treatments, Article, Employee, Service, Treatment, Doctor, NoMatch } from '../pages';

const store = appStore();

const onRouteUpdate = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    window.scrollTo(0, 0);
}

const handleOnEnterIndex = () => {
    store.dispatch(fetchPage('index', 'pageIndex'));
    //store.dispatch(fetchTest());
    //store.dispatch(sendMail());
}

const handleOnEnterAbout = () => {
    store.dispatch(fetchPage('about', 'employees'));
}

const handleOnEnterTreatments = () => {
    store.dispatch(fetchPage('treatments', 'sideBehandlingstilbud'));
}

const handleOnEnterDoctor = () => {
    store.dispatch(fetchPage('doctor', 'pageDoctor'));
}

const handleOnEnterTreatment = (e) => {
    if(!store.getState().pages.treatments) {
        store.dispatch(fetchPage('treatments', 'sideBehandlingstilbud'));
    }

    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: e.params.id,
        solidMenu: true
    });
}

const handleOnLeaveTreatment = () => {
    // store.dispatch({
    //     type: 'SET_ACTIVE_ENTRY',
    //     id: null
    // });
}

const handleOnEnterService = (e) => {
    // store.dispatch({
    //     type: 'SET_PAGE',
    //     id: 'pageTreatments'
    // })
    // if(Object.keys(store.getState().pageTreatments).length === 0 && store.getState().pageTreatments.constructor === Object) {
    //     store.dispatch(fetchPageTreatments());
    // }
    // store.dispatch(setActiveService(e.params.slug));
    // // if(!store.getState().services) {
    // //     store.dispatch(fetchTreatments());
    // //     store.dispatch(setActiveService(e.params.slug));
    // // }
    const state = store.getState();
    const id = e.params.id;

    if(!state.pages[state.activePage]) {
        store.dispatch(fetchEntry('service', id));
    }

    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: id,
        solidMenu: true
    });
}

const handleOnLeaveService = () => {
    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: null
    });
}

const handleOnEnterTraining = (e) => {
    store.dispatch(fetchPage('training', 'pageTraining'));
}

const handleOnEnterArticle = (e) => {
    const state = store.getState();
    const id = e.params.id;

    if(!state.pages[state.activePage]) {
        store.dispatch(fetchEntry('article', id));
    }

    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: id,
        solidMenu: true
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
        store.dispatch(fetchEntry('employee', id));
    }

    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: id,
        solidMenu: true
    });
}

const handleOnLeaveEmployee = () => {
    store.dispatch({
        type: 'SET_ACTIVE_ENTRY',
        id: null
    });
}

const handleOnEnterContact = () => {
    store.dispatch(fetchPage('contact', 'pageContact'));
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} onUpdate={onRouteUpdate}>
                    <Route
                        component={Frontpage}
                        onEnter={handleOnEnterIndex}
                        path="/"
                    />
                    <Route
                        component={Treatments}
                        onEnter={handleOnEnterTreatments}
                        path="/behandlinger"
                    />
                    <Route
                        component={Doctor}
                        onEnter={handleOnEnterDoctor}
                        path="/Legekontor"
                    />
                    <Route
                        path="behandlinger/:id"
                        component={Treatment}
                        onEnter={handleOnEnterTreatment}
                        onLeave={handleOnLeaveTreatment}
                    />
                    <Route
                        path="tjenester/:id"
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
                        onEnter={handleOnEnterContact}
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
                    <Route path="*" component={NoMatch}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
