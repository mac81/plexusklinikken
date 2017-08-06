const initialState = {
    isLoading: false,
    activePage: 'index',
    pages: {},
    entries: {},
    assets: {}
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case 'IS_LOADING':
            return {...state,
                isLoading: action.isLoading
            }

        case 'SET_ACTIVE_ENTRY':
            return {...state,
                activeEntry: action.id,
                solidMenu: action.solidMenu
            }

        case 'SET_ENTRY':
            return {...state,
                entries: action.entries,
                assets: action.assets
            }

        case 'SET_ACTIVE_PAGE':
            return {...state,
                activePage: action.activePage,
                solidMenu: action.solidMenu
            }

        case 'SET_PAGE':
            return {...state,
                pages: action.pages,
                entries: action.entries,
                assets: action.assets,
                isLoading: false
            }

        default:
            return state;
    }
}
