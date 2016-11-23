import { combineReducers } from 'redux';

import filtersReducer from '../reducers/filtersReducer';
import cardReducer from '../reducers/cardReducer';

const rootReducer = combineReducers({
    filtersList: filtersReducer,
    cards: cardReducer
});

export default rootReducer;