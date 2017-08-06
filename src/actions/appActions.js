import contentful from 'contentful';

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

function remapPrices(res, state) {
    const prices = {};
    res.items[0].fields.prices && res.items[0].fields.prices.map(price => {
        if(!prices[price.sys.id]) {
            prices[price.sys.id] = price;
        }
    });

    return prices;
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

    res.includes && res.includes.Asset && res.includes.Asset.map(a => {
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

        let solidMenu = false;
        if(page === 'doctor' || page === 'about' || page === 'contact' || page === 'prices') {
            solidMenu = true;
        }

        dispatch({
            type: 'SET_ACTIVE_PAGE',
            activePage: page,
            solidMenu
        })

        if(!state.pages[page]) {
            client.getEntries({content_type: contentType, include: 3})
                .then(function (res) {

                    const pages = state.pages;
                    const articles = res.items.length ? remapArticles(res, state) : null;
                    const introArticle = res.items.length ? remapIntroArticle(res, state) : null;

                    const treatments = res.items.length && res.items[0].fields.treatments ? remapTreatments(res, res.items[0].fields.treatments.sys.id) : null;
                    const services = res.items.length && res.items[0].fields.services ? remapServices(res, res.items[0].fields.services.sys.id) : null;

                    const employees = res.items.length ? remapEmployees(res, state) : null;
                    const prices = res.items.length ? remapPrices(res, state) : null;
                    const partners = res.items.length ? remapPartners(res, state) : null;
                    const entries = res.items.length ? remapEntries(res, state) : null;
                    const assets = res.items.length ? remapAssets(res, state) : null;

                    if(!state.pages[page]) {
                        pages[page] = {
                            id: page,
                            entries: Object.keys(entries.pageEntries),
                            assets: Object.keys(assets.pageAssets)
                        }

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

                        //Prices
                        Object.keys(prices).length ? pages[page].prices = Object.keys(prices) : null;

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

export function fetchEntry(contentType, id) {
    return (dispatch, getState) => {

        const client = contentful.createClient({
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
