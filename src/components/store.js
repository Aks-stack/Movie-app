import { createStore } from 'redux'

    const initialState = {
    searchQuery: '',
    };

    function searchReducer(state = initialState, action) {
        switch (action.type) {
            case 'UPDATE_SEARCH_QUERY':
                return {
                    ...state,
                    searchQuery: action.payload,
                };
            default:
            return state;
        }
    }

    const store = createStore(searchReducer);

export default store;
