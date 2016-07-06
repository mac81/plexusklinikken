const initialState = {
    activePage: 'index',
    //articles: {},
    //services: {},
    pages: {},
    entries: {},
    assets: {}
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case 'SET_ACTIVE_ENTRY':
            return {...state,
                activeEntry: action.id
            }

        // case 'SET_PAGE':
        //     return {...state,
        //         activePage: action.id
        //     }

        // case 'SET_ARTICLE':
        //     return {...state,
        //         activeArticle: action.id
        //     }
        //
        case 'SET_ENTRY':
            return {...state,
                entries: action.entries
            }

        case 'SET_PAGE':
            return {...state,
                pages: action.pages,
                entries: action.entries,
                assets: action.assets
            }

        case 'SET_ACTIVE_PAGE':
            return {...state,
                activePage: action.activePage
            }

        // case 'SET_ARTICLES':
        //     return {...state,
        //         entries: action.entries,
        //         assets: action.assets
        //     }

        // case 'SET_PAGE_INDEX':
        //     return {...state,
        //         pageIndex: {
        //             id: action.id,
        //             pageTitle: action.pageTitle,
        //             pageSummary: action.pageSummary,
        //             articles: action.articles,
        //             entries: action.entries,
        //             assets: action.assets
        //         }
        //     }
        //
        // case 'SET_PAGE_ABOUT':
        //     return {...state,
        //         pageAbout: {
        //             pageTitle: action.pageTitle,
        //             pageSummary: action.pageSummary,
        //             articles: action.articles,
        //             employees: action.employees,
        //             partners: action.partners,
        //             entries: action.entries,
        //             assets: action.assets
        //         }
        //     }
        //
        // case 'SET_PAGE_TREATMENTS':
        //     return {...state,
        //         pageTreatments: {
        //             pageTitle: action.pageTitle,
        //             pageSummary: action.pageSummary,
        //             treatments: action.treatments,
        //             services: action.services,
        //             articles: action.articles,
        //             employees: action.employees,
        //             entries: action.entries,
        //             assets: action.assets
        //         }
        //     }
        //
        // case 'SET_EMPLOYEES':
        //     return {...state,
        //         employees: action.employees,
        //         employeeEntries: action.entries,
        //         employeeAssets: action.assets
        //     }
        //
        // case 'SET_ACTIVE_TREATMENT':
        //     return {...state, activeTreatment: action.key}
        //
        // case 'SET_ACTIVE_SERVICE':
        //     return {...state, activeService: action.slug}

        default:
            return state;
    }
}
