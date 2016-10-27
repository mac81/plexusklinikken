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

// function remapTreatments(res) {
//     const treatments = {};
//     res.items[0].fields.treatments && res.items[0].fields.treatments.map(a => {
//         if(!treatments[a.sys.id]) {
//             treatments[a.sys.id] = a;
//         }
//     });
//
//     return treatments;
// }

function remapTreatments(res, id) {
    const entry = res.includes.Entry.find(e => e.sys.id === id)
    const treatments = {};

    entry.fields.treatments.map(e => {
        if(!treatments[e.sys.id]) {
            treatments[e.sys.id] = e;
        }
    });

    return treatments;
}

function remapServices(res, id) {
    const entry = res.includes.Entry.find(e => e.sys.id === id)
    const services = {
        title: entry.fields.title,
        items: {}
    };

    entry.fields.services.map(e => {
        if(!services.items[e.sys.id]) {
            services.items[e.sys.id] = e;
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

function remapPartners(res, state) {
    const partners = {};
    res.items[0].fields.partners && res.items[0].fields.partners.map(partner => {
        if(!partners[partner.sys.id]) {
            partners[partner.sys.id] = partner;
        }
    });

    return partners;
}

function remapEntry(res, state) {
    const entries = state.entries;

    if(!entries[res.sys.id]) {
        entries[res.sys.id] = res;
    }

    return {
        entries
    }
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

// function remapSections(res, state) {
//     const sections = state.sections || [];
//     const services = state.services || {};
//     const treatments = state.treatments || {};
//
//     res.items[0].fields.sections.map(s => {
//         const section = res.includes.Entry.find(e => e.sys.id === s.sys.id);
//
//         if(!sections[section.sys.id]) {
//             sections.push(section.sys.id);
//         }
//
//         section.fields[section.sys.contentType.sys.id].map(se => {
//             const entry = res.includes.Entry.find(entry => entry.sys.id === se.sys.id);
//             if(section.sys.contentType.sys.id === 'services') {
//                 if(!services[entry.sys.id]) {
//                     services[entry.sys.id] = entry;
//                 }
//             }
//             if(section.sys.contentType.sys.id === 'treatments') {
//                 if(!treatments[entry.sys.id]) {
//                     treatments[entry.sys.id] = entry;
//                 }
//             }
//         });
//     });
//
//     return {
//         sections,
//         services,
//         treatments
//     }
// }

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
            // dispatch({
            //     type: 'IS_LOADING',
            //     isLoading: true
            // })
            client.getEntries({content_type: contentType, include: 3})
                .then(function (res) {

                    const pages = state.pages;
                    //const sections = res.items[0].fields.sections && remapSections(res, state);
                    const articles = remapArticles(res, state);
                    const introArticle = remapIntroArticle(res, state);

                    const treatments = res.items[0].fields.treatments && remapTreatments(res, res.items[0].fields.treatments.sys.id);
                    const services = res.items[0].fields.services && remapServices(res, res.items[0].fields.services.sys.id);

                    const employees = remapEmployees(res, state);
                    const partners = remapPartners(res, state);
                    const entries = remapEntries(res, state);
                    const assets = remapAssets(res, state);

                    if(!state.pages[page]) {
                        pages[page] = {
                            id: page,
                            // title: res.items[0].fields.title,
                            // summary: res.items[0].fields.summary,
                            //articles: Object.keys(articles),
                            //introArticle: Object.keys(introArticle),
                            //sections: sections.sections,
                            //treatments: Object.keys(treatments),
                            //employees: Object.keys(employees),
                            //partners: Object.keys(partners),
                            //services: Object.keys(services),
                            entries: Object.keys(entries.pageEntries),
                            assets: Object.keys(assets.pageAssets)
                        }
                        //sections.sections ? pages[page].sections = sections.sections : null;
                        treatments ? pages[page].treatments = Object.keys(treatments) : null;
                        services ? pages[page].services = {
                            title: services.title,
                            items: Object.keys(services.items)
                        } : null;

                        // Page
                        res.items[0].fields.title ? pages[page].title = res.items[0].fields.title : null;
                        res.items[0].fields.summary ? pages[page].summary = res.items[0].fields.summary : null;
                        res.items[0].fields.text ? pages[page].text = res.items[0].fields.text : null;
                        res.items[0].fields.body ? pages[page].body = res.items[0].fields.body : null;
                        res.items[0].fields.backgroundImage ? pages[page].backgroundImage = res.items[0].fields.backgroundImage : null;
                        res.items[0].fields.employeeListTitle ? pages[page].employeeListTitle = res.items[0].fields.employeeListTitle : null;

                        //Intro Article
                        Object.keys(introArticle).length ? pages[page].introArticle = Object.keys(introArticle) : null;

                        //Articles
                        Object.keys(articles).length ? pages[page].articles = Object.keys(articles) : null;

                        //Employees
                        Object.keys(employees).length ? pages[page].employees = Object.keys(employees) : null;

                        //Partners
                        res.items[0].fields.titlePartners ? pages[page].titlePartners = res.items[0].fields.titlePartners : null;
                        res.items[0].fields.summaryPartners ? pages[page].summaryPartners = res.items[0].fields.summaryPartners : null;
                        Object.keys(partners).length ? pages[page].partners = Object.keys(partners) : null;

                        // Contact Page
                        res.items[0].fields.titleClinic ? pages[page].titleClinic = res.items[0].fields.titleClinic : null;
                        res.items[0].fields.phoneClinic ? pages[page].phoneClinic = res.items[0].fields.phoneClinic : null;
                        res.items[0].fields.emailClinic ? pages[page].emailClinic = res.items[0].fields.emailClinic : null;
                        res.items[0].fields.bodyClinic ? pages[page].bodyClinic = res.items[0].fields.bodyClinic : null;
                        res.items[0].fields.titleDoctor ? pages[page].titleDoctor = res.items[0].fields.titleDoctor : null;
                        res.items[0].fields.phoneDoctor ? pages[page].phoneDoctor = res.items[0].fields.phoneDoctor : null;
                        res.items[0].fields.emailDoctor ? pages[page].emailDoctor = res.items[0].fields.emailDoctor : null;
                        res.items[0].fields.bodyDoctor ? pages[page].bodyDoctor = res.items[0].fields.bodyDoctor : null;
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
                //console.log(res);
            })
    }
}

export function fetchEntry(contentType, id) {
    return (dispatch, getState) => {

        var client = contentful.createClient({
            space: '2omch4pe7no2',
            accessToken: '6274e3bdae4a785f1e1056c870a301b6a7d8bc893e69655354fc6ec439343fe6'
        })

        client.getEntries({content_type: contentType, include: 2, 'sys.id': id})
            .then(function (res) {
                const entries = remapEntries(res, getState());
                const assets = remapAssets(res, getState());
                dispatch({
                    type: 'SET_ENTRY',
                    entries: entries.entries,
                    assets: assets.assets
                })
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
            url: "https://plexusklinikken-api.herokuapp.com/api"
        }).done(function() {
            console.log('ajax complete');
        });
    }
}
