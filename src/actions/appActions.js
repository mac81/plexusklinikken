import contentful from 'contentful';
import $ from 'jquery';

// function remapArticles(res, state) {
//     const key = state.articles;
//     const pageKey = {};
//
//     res.items[0].fields.articles.map(a => {
//         if(!key[a.sys.id]) {
//             key[a.sys.id] = a;
//         }
//         pageKey[a.sys.id] = a;
//     });
//
//     return {
//         key,
//         pageKey
//     }
// }

// function remapTreatments(res, state) {
//     const key = state.treatments;
//     const pageKey = {};
//     res.items[0].fields.treatments && res.items[0].fields.treatments.map(a => {
//         if(!key[a.sys.id]) {
//             key[a.sys.id] = a;
//         }
//         pageKey[a.sys.id] = a;
//     });
//
//     return {
//         key,
//         pageKey
//     }
// }

function remapArticles(res) {
    const articles = {};
    res.items[0].fields.articles && res.items[0].fields.articles.map(a => {
        if(!articles[a.sys.id]) {
            articles[a.sys.id] = a;
        }
    });
    return articles;
}

function remapIntroArticle(res) {
    const introArticle = {};
    if(res.items[0].fields.introArticle) {
        introArticle[res.items[0].fields.introArticle.sys.id] = res.items[0].fields.introArticle;
    }

    return introArticle;
}

function remapTreatments(res) {
    const treatments = {};
    res.items[0].fields.treatments && res.items[0].fields.treatments.map(a => {
        if(!treatments[a.sys.id]) {
            treatments[a.sys.id] = a;
        }
    });

    return treatments;
}

function remapServices(res, state) {
    const services = {};
    res.items[0].fields.services && res.items[0].fields.services.map(service => {
        if(!services[service.sys.id]) {
            services[service.sys.id] = service;
        }
    });

    return services;
}

function remapEmployees(res, state) {
    const employees = {};
    res.items[0].fields.employees && res.items[0].fields.employees.map(employee => {
        if(!employees[employee.sys.id]) {
            employees[employee.sys.id] = employee;
        }
    });

    return employees;
}


function remapEntries(res, state) {
    const entries = state.entries;
    let pageEntries = {};

    res.includes && res.includes.Entry.map(e => {
        if(!entries[e.sys.id]) {
            entries[e.sys.id] = e;
        }
        pageEntries[e.sys.id] = e;
    });

    return {
        entries,
        pageEntries
    }
}

function remapAssets(res, state) {
    const assets = state.assets;
    let pageAssets = {};

    res.includes && res.includes.Asset.map(a => {
        if(!assets[a.sys.id]) {
            assets[a.sys.id] = a;
        }
        pageAssets[a.sys.id] = a;
    });

    return {
        assets,
        pageAssets
    }
}

export function fetchPage(page, contentType) {
    return (dispatch, getState) => {

        const state = getState();

        const client = contentful.createClient({
            space: '2omch4pe7no2',
            accessToken: '6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6'
        })

        dispatch({
            type: 'SET_ACTIVE_PAGE',
            activePage: page
        })

        if(!state.pages[page]) {
            client.getEntries({content_type: contentType, include: 2})
                .then(function (res) {

                    const pages = state.pages;
                    const articles = remapArticles(res, state);
                    const introArticle = remapIntroArticle(res, state);
                    const treatments = remapTreatments(res, state);
                    const services = remapServices(res, state);
                    const employees = remapEmployees(res, state);
                    const entries = remapEntries(res, state);
                    const assets = remapAssets(res, state);

                    if(!state.pages[page]) {
                        pages[page] = {
                            id: [page],
                            title: res.items[0].fields.title,
                            summary: res.items[0].fields.summary,
                            articles: Object.keys(articles),
                            introArticle: Object.keys(introArticle),
                            treatments: Object.keys(treatments),
                            employees: Object.keys(employees),
                            services: Object.keys(services),
                            entries: Object.keys(entries.pageEntries),
                            assets: Object.keys(assets.pageAssets)
                        }
                    }
                    dispatch({
                        type: 'SET_PAGE',
                        pages: pages,
                        entries: entries.entries,
                        assets: assets.assets
                    })
                })
        }
    }
}

export function fetchTest(id) {
    return (dispatch, getState) => {

        var client = contentful.createClient({
            space: '2omch4pe7no2',
            accessToken: '6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6'
        })

        client.getEntries({content_type: 'treatment', 'fields.treatmentType': 'fysioterapi'})
            .then(function (res) {
                console.log(res);
            })
    }
}

export function fetchEntry(id) {
    return (dispatch, getState) => {

        var client = contentful.createClient({
            space: '2omch4pe7no2',
            accessToken: '6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6'
        })

        client.getEntry(id)
            .then(function (res) {
                console.log(res);
            })
    }
}



//
//
//
//
// export function setActiveTreatment(key) {
//     return (dispatch) => {
//         dispatch({
//             type: 'SET_ACTIVE_TREATMENT',
//             key: key
//         })
//     }
// }
//
// export function setActiveService(slug) {
//     return (dispatch) => {
//         dispatch({
//             type: 'SET_ACTIVE_SERVICE',
//             slug: slug
//         })
//     }
// }

export function setArticle(id) {
    return (dispatch) => {
        dispatch({
            type: 'SET_ARTICLE',
            id: id
        })
    }
}

export function sendMail() {
    return (dispatch) => {
        $.ajax({
            url: "/api/sendmail"
        }).done(function() {
            console.log('ajax complete');
        });
    }
}
