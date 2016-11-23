const initialState = {
    cards: [],
    isLoading: false,
    isFailed: false,
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_CARDS_START':
            return {...state, isLoading: true};

        case 'LOAD_CARDS_SUCCESS':
            return {...state, cards: action.payload, isLoading: false}

        case 'LOAD_CARDS_FAILD':
            return {...state, isLoading: false, isFailed: true, cards: []};

        default:
            return state;

    }
}

export default cardReducer;