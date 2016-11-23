const initialState = {
    filters: [],
    selected: null
};

const filterSelected = (list) => {
    return list.find(item => {
        return item.selected;
    });
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SELECT':
            let newSelected;
            const newFilters =  state.filters.map(item => {
                if (item.id !== action.id) {
                    item.selected = false;
                    return item;
                } else {
                    item.selected = true;
                    newSelected = item;
                    
                    return {...item, selected: true}
                }
            });

            return {...state, filters: newFilters, selected: newSelected}


        case 'LOAD_FILTERS':
            const selectedItem = filterSelected(action.payload);

            return {...state, filters: action.payload, selected: selectedItem};

        default:
            return state;
    }
}

export default filtersReducer;