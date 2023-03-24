const defaultState = {
    cash: 5
}

export const searchNews = (state = defaultState, action) =>{
    switch (action.type){
        case 'SEARCH_NEWS':
            return {...state, searchValue: state.searchValue}
        default:
            return state
    }
}